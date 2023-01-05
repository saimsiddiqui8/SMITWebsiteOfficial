import React from 'react'
import "./styles.css"
import { Container, Row, Col } from 'react-bootstrap'
import ThemeButton from '../ThemeBtn/Button'
const About = () => {
  
  return (
    <>
      <Container id="aboutUsDiv"  style={{borderRadius: "40px"}} className='mb-5 mt-5  pb-5'>
        <Row id='row'  className=' mt-5  pt-1 ps-5'>

          <Col lg={2}>
            {/* <img id='founder' className="container" src={Image} alt="" /> */}
          </Col>

          <Col lg={8}>

            <h1 className='mt-5' id='headi'><span id='span2'>Introduction</span></h1>
            <p className='text-light mb-5 pb-4'> About - Introduction</p>

            <div style={{color: "#8AC642"}} id="parent">Serving Humanity.<div id="border"></div></div>

            <p  className='mt-2 text-light'> Saylani Welfare International Trust has been serving humanity for 22 years. Saylani has spent around 7 billion rupees in the service of humanity in 2021 and our plan is to spend about 11 billion rupees for this cause in 2022. Saylani Mass Training Department is one of the Department which is running under Saylani Welfare Trust Management. This department is related to Saylani education Board.</p>

            <ThemeButton classes='mb-5' data="DONATE" />
          </Col>
        </Row>
      </Container>

      <Container>
        <h3 className='mt-4'><span id='span2'>SAYLANI WELFARE INTERNATIONAL TRUST</span></h3>
        <p>Saylani Welfare International Trust has been working for the last 22 years to improve the conditions of the less privileged, helpless, and handicapped individuals. The organization is working day and night to make life happier, especially for the middle class, lower middle class and even lower class. At time of establishing the organization, the founder of Saylani Welfare International Trust and a few of his associates had made a commitment to serve the distressed people living in Pakistan and abroad in all stages of life. It is a blessing in disguise that today the organization is serving humanity in more than 63 areas of life without any discrimination. <br /> <br />

          The soul, founder and patron of this organization is Hazrat Allama Maulana Muhammad Bashir Farooqi. He is also a well-known spiritual person and Islamic scholar in the Islamic world. It is the result of his efforts that today Saylani Welfare International Trust is serving humanity all over the world. <br /><br />

          The organization started out as a rented house and today has at least 630 branches worldwide. The organization also has more than 630 Dastarkhwan, where thousands of employees are employed. Today, the organization spends more than 7 billion annually on the service and welfare of humanity. Not only this, but more than 63 spheres of life from birth to death (including food, health, education, social welfare, clean water, marriage, mass I.T training, vocational training, assistance to Syrian and Burmese refugees, pilgrim services, school services fees, easy loans, easy employment, hairdressing, medical & diagnostic center, laboratory tests, x-ray, ultrasound, ECG, consultant clinic, mobile dining, mobile clinic, mobile air care clinic & operation theater, and in case of natural disasters aid) our organization is serving humanity. <br /><br />

          More than 300,000 people are benefited daily by the Saylani. The organization provides vocational training to unskilled people in various fields, renting of poor people houses, school fees and annual expenses of their children, assistance in marriage of their daughters, loan facility for running small scale business, rickshaws and motorbikes for employment, stalls, shop delivery, finger chips machine, sewing machines for women and other items are provided.</p>
      <br /><br /><br />
      </Container>

      <Container style={{borderRadius: "40px"}} id="CharimanMessage" className='p-5'>
      <p className='text-light'>About - Chairman Message</p>
      <h3 className='mt-4' style={{color: "#8AC642"}} >Chairman Message</h3>
      <p className='text-light'>The purpose of sending this message to you is so that you not only spread this message to others but also play your part in helping us to continue serving and helping the needy till the Day of Judgment.</p>
      
      <p className='text-light'>It should be noted that Allah, who is in need of no one and nothing, instills upon his men to give Qarz-e-Hasana because it is in man’s nature to be frugal whilst spending his wealth. Allah speaks about qarz because it is returned and Allah promises that He will return the goodly loan by 70 folds. Allah conveys his message to the Muslim ummah through the Holy Prophet Muhammad prompting Muslims to spend their wealth in a certain way. He says,Oh children of Adam! Trust me with your wealth. If you do so, no fire, flood or thieves will be able to rob you off your money. Instead, you will be endowed with your wealth when you most need it. He further says that the poor and weak will not remain hungry and naked except due to the negligence of the rich, who should not be stingy in spending their money on those worse off than themselves. Allah will not only take strict accountability from those people but He will also punish them accordingly. On the Day Of Judgement, the rich will be humiliated because they did not help the needy. The needy will complain to Allah and say that all those men on whom you graciously bestowed the rights of wealth showed negligence in its proper use; they were busy spending on themselves and forgot about us, the ones who needed it. Allah will reply to this and say: “I swear on my respect and glory! I will bring you closer to me and push them further away. <br /><br />
      Alhamdollilah, Allah has accorded Saylani Welfare with the highest favor by sending those people our way who follow the teachings of the Holy Quran and Hadith, give zakat, fidyah, fitrah, khairat and other donations to help us help those in need. The purpose of sending this message to you is so that you not only spread this message to others but also play your part in helping us to continue serving and helping the needy till the Day of Judgment.
      </p>
      <h3 className='mt-4' ><span id='span2'>Muhammad Bashir Farooqi</span></h3>
      <p className='text-light'>Chairman Saylani Welfare</p>
      
      </Container>

    </>
  )
}

export default About