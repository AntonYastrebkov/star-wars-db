const compose = (...fcn) => (comp) => {
  return fcn.reduceRight((prevResult, f) => f(prevResult), comp);
}

export default compose;