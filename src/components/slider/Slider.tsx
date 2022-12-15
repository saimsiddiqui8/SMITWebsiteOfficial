import Carousel from 'react-bootstrap/Carousel';

function Slides() {
  return (
    <Carousel className='mt-5 pt-5'>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 rounded"
          src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/317947773_5247657058669597_267656044923833506_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG9B1Awh7_qrkS013Emg30EeRDMDxaVJ0V5EMwPFpUnRXnHbnvB-TfZ0eFLQ6TxeQjnQ9-bNJGw7KPyAmiX2OuN&_nc_ohc=aYKPGrHg7VcAX94GuHu&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfARzC_QM98e4IHYBkvmW9ED9Gd56Dt7jpjcklyIyqjGig&oe=639BDB05"
          alt="First slide"
        />
      </Carousel.Item>

       <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 rounded"
          src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/317724577_5247659392002697_5155170169308111872_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF8446peZvnOWqudbqPehmZmbQCSrgL46WZtAJKuAvjpYuRCE4zqtMzfJgCWgZlD7EvxBkWeuiDFHDEUlqoLWr6&_nc_ohc=adSb6epRvF0AX-nzfAv&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfAobegxWGybRd9VQ9g_Bsn9IJJ0KRIA8W_9_rEnQzzpPw&oe=639BF272"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 rounded"
          src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/317922410_5247659288669374_4558241360452186361_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH_mN24bLVSqLLU7h_T8cb0KLvcCY0KFiAou9wJjQoWIGiUk1SzCgv1JGqmocd_FdP6rpFjXVpEBMmAgR-5EWLp&_nc_ohc=nGx_zZgBdOEAX93U4Jg&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfCkbGvqJCZKJKK2Gj1yrGzoTU4fqzH9T_MMHgYhPA1qxg&oe=639CCED1"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 rounded"
          src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/317932692_5247659435336026_2591423838811065273_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFYOj-aK7xIzAMTncFyARvV3jZdcPALCrfeNl1w8AsKt0L4a1mi4Dde5rmIcQddYPoFv_jBupVwXjB1aUfRZfUP&_nc_ohc=-npAwV7KVskAX_siphO&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfA7rVOPE7I8LdmAA9-S7Zt2Osx-uFeBqPXXbH6zhNAW7w&oe=639BB7B0"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 rounded"
          src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/317793151_5247660065335963_6310483442440499184_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFk-wk3J_FFx-KZ1S6k1EmHqOS251i1E2eo5LbnWLUTZ9MLyeK_FFSeoXZz44HonHa4XqYNm9oikbsGyr2Dp6hk&_nc_ohc=3fewgpQXzEEAX9w8IaQ&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfAWg7nqT08gGsEalMnnWRp22aGva6i3MA7RA1F4FqJUng&oe=639C99D5"
          alt="Third slide"
        />
      </Carousel.Item>

      
    </Carousel>
  );
}

export default Slides;