const quarters = document.querySelectorAll(".quarter1");
const startDate = document.querySelector("#startDate");
const lastDate = document.querySelector("#lastDate");

quarters.forEach((quarter) => {
  quarter.addEventListener("change", () => {

    const checkedQuarters = [];
    document.querySelectorAll(".quarter1").forEach((q) => {
      if (q.checked) {
        checkedQuarters.push(q);
      }
    });

    if (checkedQuarters.length === 2) {
      quarters.forEach((q) => {
        if (!checkedQuarters.includes(q)) {
          q.disabled = true;
        }
      });
    } else {
      quarters.forEach((q) => {
        if (!checkedQuarters.includes(q)) {
          q.disabled = false;
        }
      });
    }

    const startDateList = ["2024-01-01","2024-04-01", "2024-07-01", "2024-10-01", ];

    const lastDateList = [ "2024-03-31", "2024-06-30", "2024-09-30", "2024-12-31", ];

    if (checkedQuarters.length === 2) {
          startDate.value = startDateList[checkedQuarters[0].value - 1];
          lastDate.value = lastDateList[checkedQuarters[1].value - 1];
        }
         else if (checkedQuarters.length === 1) {
          startDate.value = startDateList[checkedQuarters[0].value - 1];
          lastDate.value = lastDateList[checkedQuarters[0].value - 1];
        } 
        else {
          startDate.value = "";
          lastDate.value = "";
        }
         
  });
});