const useRandom = (array) => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          return array
        };
      };
  
      const firstRandomized = shuffleArray(array)
      const secondRandomized = shuffleArray(firstRandomized)
      const thirdRandomized = secondRandomized.sort(() => Math.random() - 0.5);
      const randomizedArray = thirdRandomized.reverse().sort(() => Math.random() - 0.5);
      return randomizedArray;
};

export default useRandom;