enum Environment{

    Local ="Local",
    Development ="Development",
    staging="staging",
}
function runTest(status:Environment)
{
      console.log(`The Enumration for environment is: ${status}`);
}
runTest(Environment.Local);
