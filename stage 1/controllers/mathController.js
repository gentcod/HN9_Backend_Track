exports.mathOperation = (req, res) => {
   const data = req.body;

   //Convert X and Y to Numbers; for cases where X and/or Y are sent as string
   const x = Number(data.x);
   const y = Number(data.y);

   //Initialize variable to hold the result of the operation
   let result;

   //Check for math operation
   if (data.operation_type === "+" || data.operation_type === "add" || data.operation_type === "addition") result = x + y;
   if (data.operation_type === "-" || data.operation_type === "subtract" || data.operation_type === "subtraction") result = x - y;
   if (data.operation_type === "*" || data.operation_type === "multiply" || data.operation_type === "multiplication") result = x * y;
   if (data.operation_type === "/" || data.operation_type === "divide" || data.operation_type === "division") result = x / y;

   res.status(200).json({
      slackUsername: "gentcod",
      result: result,
      operation_type: data.operation_type,
   })
};