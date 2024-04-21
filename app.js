// write code here

        let a = undefined;
        let b = 2;
        let c = a++;

        
        let d = String(a);
        let e = String(b);
        let f = String(c);

        console.log(d); 
        console.log(e); 
        console.log(f); 

        ผลลัพธ์ที่ได้
        NaN
         2
        NaN

     undefined เมื่อแปลงเป็นค่าเป็น ข้อความ จะไม่มีค่า จึงเป็น not a number เป็นค่าว่าง
        2 แปลงเป็น ข้อความ 2จะกลายเป็น text หรือข้อความ
        a++; เป็นค่านิพจน์ เพิ่มค่าทีละ1 เมื่อเปลี่ยนเป็นข้อความ จะไม่มีผลเป็นค่า null
