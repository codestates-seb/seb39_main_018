export const calculateDate = (date: string): string => {
    const nowDate = new Date();
    const createdDate = new Date(date);
    const dateCount = nowDate.getTime() - createdDate.getTime();
    let min = Math.floor(dateCount / (1000 * 60));
    let hor = Math.floor(dateCount / (1000 * 60 * 60));
    let day = Math.floor(dateCount / (1000 * 60 * 60 * 24));
    let mon = Math.floor(dateCount / (1000 * 60 * 60 * 24 * 30));
    let year = Math.floor(dateCount / (1000 * 60 * 60 * 24 * 30 * 12));
    return year
      ? `${year} 년전`
      : mon
      ? `${mon} 개월전`
      : day
      ? `${day} 일전`
      : hor
      ? `${hor} 시간전`
      : min
      ? `${min} 분전`
      : '방금전';
  };




