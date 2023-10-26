Feature("Practical Task Number 1 - Variables and Type of Data");

Scenario("PZ1 Variables and Type of Data", () => {
  let variableA: number = 10;
  console.log(`variableA: ${variableA}, ++variableA: ${++variableA}`);
  console.log(`variableA: ${variableA}, variableA++: ${variableA++}, variableA: ${variableA}`);
  console.log(`variableA: ${variableA}, --variableA: ${--variableA}`);
  console.log(`variableA: ${variableA}, variableA--: ${variableA--}, variableA: ${variableA}`);
  console.log(variableA);
  const variableB: string = "hello";
  const variableC: boolean = true;
  const result = variableA + variableB + variableC;
  console.log(`result: ${result}`);
  console.log(`typeof result: ${typeof result}`);
  const variableD = [variableA, variableB, variableC];
  console.log(typeof variableD);
  const variableF = { variableA, variableB, variableC };
  console.log(variableF);
  enum AnswerOptions {
    Yes,
    No,
  }
  console.log(`Is your answer ${AnswerOptions[0]} or ${AnswerOptions[1]}?`);
  enum AnswerOptions2 {
    YES = "Yes",
    NO = "No",
  }
  console.log(`Is your answer ${AnswerOptions2.YES} or ${AnswerOptions2.NO}?`);
  const experiment: string[] = [];
  console.log(experiment == null);
  console.log(experiment == undefined);
  const emptyArr: Array<string> = [];
  console.log("Is emptyArr null ? ", !!emptyArr);
  console.log("Is emptyArr undefined ? ", emptyArr == undefined);
  console.log("Is emptyArr[0] undefined ? ", emptyArr[0] == undefined);
  let userInfo: any = { name: "Irina", age: "20", country: "Poland" };
  userInfo = { company: "Tealium" };
  console.log(userInfo.name);
  console.log(userInfo.company);
  type FileType = {
    fileName: string;
    filePath: string;
  };
  const newFile: FileType = { fileName: "text.tx", filePath: "./Tests/" };
  console.log(newFile.filePath + newFile.fileName);
  let test: string | number;
  test = 5;
  console.log(typeof test);
  test = "5";
  console.log(typeof test);
  const a2 = null;
  console.log(!a2);
  console.log(!!a2);
  console.log(null == undefined);
  console.log(null == 0);
  console.log(false == undefined);
  console.log("" == undefined);
});
