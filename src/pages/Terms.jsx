import React from 'react'

function Terms() {
  return (
    <div className='w-full h-auto py-10'>
        <div className='w-5/6 mx-auto flex flex-col gap-4'>
        <h1 className='w-full text-center pb-4 text-3xl'>Terms Of Service</h1>
        <p>Welcome to our online puja platform. By using our services, you agree to comply with the following terms and conditions:</p>
        <ol className='leading-loose'>
            <li>1: Eligibility: Users must be at least 18 years old to access our services.</li>
            <li>2: Puja Requests: Users may request pujas to be performed on their behalf. All requests must adhere to the guidelines of our platform.</li>
            <li>3: Payment: Users agree to pay for requested pujas in advance. Refunds may be issued based on our refund policy.</li>
            <li>4: Puja Performance: We will make every effort to perform the requested pujas according to traditional practices. However, we do not guarantee specific outcomes or results.</li>
            <li>5: User Conduct: Users must not engage in any unlawful or inappropriate behavior while using our platform.</li>
            <li>6: Privacy: We are committed to protecting user privacy. Please refer to our Privacy Policy for details on how we handle user data.</li>
            <li>7: Intellectual Property: All content and materials on our platform are protected by copyright. Users must not use, reproduce, or distribute any content without authorization.</li>
            <li>8: Limitation of Liability: We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.</li>
        </ol>      
        <h4>
            By using our platform, you agree to abide by these terms and conditions. We reserve the right to modify these terms at any time. It is your responsibility to review the terms periodically for changes. If you do not agree with these terms, please do not use our platform.
        </h4>
        </div>
    </div>
  )
}

export default Terms