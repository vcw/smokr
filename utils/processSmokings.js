function processSmokings(smokings) {
  return smokings.reduce((accumulator, smoking) => {
    const date = smoking.toLocaleDateString('ru-RU');
    const recordIndex = accumulator.findIndex((record) => record.date === date);

    if (recordIndex !== -1) {
      accumulator[recordIndex].data.push(smoking);
    } else {
      accumulator.push({
        date,
        data: [smoking],
      });
    }
    return accumulator;
  }, []);
}

export default processSmokings;
