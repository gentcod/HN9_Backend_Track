exports.mathOperation = (req, res) => {
   const data = req.body;

   //Convert X and Y to Numbers; for cases where X and/or Y are sent as string
   const x = +data.x;
   const y = +data.y;

   //Initialize variable to hold the result of the operation
   let result;

   //Check for math operation
   if (data.operation_type.value === "+" || data.operation_type.value === "add" || data.operation_type.value === "addition") result = x + y;
   if (data.operation_type.value === "*" || data.operation_type.value === "multiply" || data.operation_type.value === "multiplication") result = x * y;
   if (data.operation_type.value === "/" || data.operation_type.value === "divide" || data.operation_type.value === "division") result = x / y;

   res.status(200).json({
      slackUsername: "gentcod",
      result: result,
      operation_type: data.operation_type,
   })
};