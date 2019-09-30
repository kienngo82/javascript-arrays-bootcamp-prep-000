var chocolateBars = ["snickers", "hundred grand", "kitkat", "skilles"]

function addElementToBeiginningOfArray(array, element)
{
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array = [element, ...array]
}