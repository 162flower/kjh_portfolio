// date.js

// export를 입력해야 다른문서에서 아래의 함수를 활용할 수 있음 
export const getStringDate = (d) => {
    // ISO : 국제표준방식
    return d.toISOString().slice(0,10);
};