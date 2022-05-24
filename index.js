/* Your Code Here */

function createEmployeeRecord(record) {
  return createEmployeeRecord.apply(this.record, arguments)
  }
  
  function createEmployeeRecords(nestedArray) {
    // Input: Array of arrays
    // const freshArray = []; // Initialize an empty array to hold modified value
    // for (const chunk of nestedArray) {
    //   // Iterate over nested arrays
    //   freshArray.push(createEmployeeRecord(chunk)); // Index each retained value from callback into empty array
    // }
    nestedArray.map(e => {
     return createEmployeeRecord(e)
    })
    return this//freshArray;
  }
  
  // function createTimeInEvent(empRecord, timeStamp) {
  //   let date = timeStamp.split(" ")[0];
  //   const timeInObject = {
  //     type: "TimeIn",
  //     date: `${date}`,
  //     hour: parseInt(timeStamp.slice(-4), 10),
  //   };
  //   this.timeInEvents.push(timeInObject);
  //   return this;
  // }
  
  // function createTimeOutEvent(empRecord, timeStamp) {
  //   let date = timeStamp.split(" ")[0];
  //   const timeOutObject = {
  //     type: "TimeOut",
  //     date: `${date}`,
  //     hour: parseInt(timeStamp.slice(-4), 10),
  //   };
  //   this.timeOutEvents.push(timeOutObject);
  //   return this;
  // }
  
  // function hoursWorkedOnDate(empRecord, date) {
  //   let punchOut = empRecord.timeOutEvents.find((e) => {
  //     return e.date === date;
  //   }).hour;
  //   let punchIn = empRecord.timeInEvents.find((e) => {
  //     return e.date === date;
  //   }).hour;
  
  //   return (punchOut - punchIn) / 100;
  // }
  
  // function wagesEarnedOnDate(empRecord, date) {
  //   return hoursWorkedOnDate(empRecord, date) * empRecord.payPerHour;
  // }
  
  // function allWagesFor(record) {
  //   let total = 0;
  //   for (let i = 0; i < record.timeInEvents.length; i++) {
  //     const payDay = wagesEarnedOnDate(record, record.timeInEvents[i].date);
  //     total += payDay;
  //   }
  //   return total;
  // }
  
  // function calculatePayroll(array) {
  //   let totalPay = array.reduce((acc, record) => {
  //     const empPay = allWagesFor(record);
  //     return acc + empPay;
  //   }, 0);
  //   return totalPay;
  // }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

