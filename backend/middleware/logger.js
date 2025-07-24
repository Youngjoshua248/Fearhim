const logger = (req, res, next) => {
  const start = Date.now();
  
  // Log the incoming request
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - Started`);
  
  // Log request body for POST/PUT requests (excluding sensitive data)
  if (['POST', 'PUT', 'PATCH'].includes(req.method) && req.body) {
    const logBody = { ...req.body };
    // Remove sensitive fields from logging
    if (logBody.password) logBody.password = '[REDACTED]';
    if (logBody.hashed_password) logBody.hashed_password = '[REDACTED]';
    if (logBody.token) logBody.token = '[REDACTED]';
    
    console.log(`[${new Date().toISOString()}] Request Body:`, JSON.stringify(logBody, null, 2));
  }
  
  // Override res.end to log response
  const originalEnd = res.end;
  res.end = function(chunk, encoding) {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${res.statusCode} (${duration}ms)`);
    originalEnd.call(this, chunk, encoding);
  };
  
  next();
};

module.exports = logger; 