import React from 'react'
import './Faq.css'
import Header from './header/Header'

const Faq = () => {

  return (
    <div>
      <Header></Header>
      <div className='title'>
        <h1>Faq Questions</h1>
        <nav>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a href='/' >
                <i class="bi bi-house" id='icon'></i></a>
            </li>
            <li className='breadcrumb-item active'>Faq-Question</li>
          </ol>
        </nav>
      </div>
      <section className='faq-section'>

        <div class="accordion" id="accordionExample" style={{ width: "1190px" }}>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What is Minimum amount of money i can invest?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                The minimum amount of money i can invest is $1000
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What types of investment products do you offer?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                We offer a diverse range of investment products, including stocks, bonds, mutual funds, and tailored portfolios, designed to meet various investment objectives.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree" aria-expanded="false" aria-controls="collapseTwo">
                Is my investment portfolio managed by professionals?
              </button>
            </h2>
            <div id="collapsethree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Yes, our team of experienced financial experts actively manages your portfolio to optimize returns and minimize risks.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseTwo">
                How often can I access my investment funds?
              </button>
            </h2>
            <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                You can access your investment funds at any time, subject to the specific terms and conditions of your chosen investment product.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseTwo">
                What is the typical investment duration for your products?
              </button>
            </h2>
            <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Investment durations vary, but we offer both short-term and long-term options, allowing you to choose the investment horizon that suits your financial goals.
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Faq

