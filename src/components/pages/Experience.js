import React, {useEffect} from 'react';

export default function Experience() {
  // Scroll to top fix when changing components
  useEffect(() => {
      window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="row work-experience">
        <section className="content">
            <div className="heading">WORK EXPERIENCE</div>

            <div className="marg-top-30">
              <a href="./docs/JonMooney-Resume.docx">Grab a copy of my resume</a>
            </div>

            <p className="work-heading">Front End Developer (February 2010 to Jul 2020)</p>

            <p style={{fontWeight:400}}>
                Hewlett Packard Enterprise / Modis Staffing
            </p>
            
            <ul>
                <li>
                    JavaScript front end development across all business units within Hewlett Packard Enterprise, providing support for both internal and external users
                </li>

                <li>
                    Consistently being recognized across all of HPE for development of efficient web-based tools that are user-friendly and helping to drive sales
                </li>
            </ul>

            <p className="work-heading">
                Accomplishments
            </p>

            <ul>
                <li>
                    Enterprise information libraries - Spanning all business units, these pages allowed customers/partners to easily find collateral for a particular product or solution based on a set of selectable criteria. These pages were the primary collateral interface superseding the official HPE interface due to better usability.
                </li>

                <li>
                    HPE/Aruba Switch Selector - Product selection tool that allows users to narrow down products by using a set of selectable criteria. The user has the option of displaying unique product information or comparing up to 4 products at a time to help them in the buying process. At one point I was contacted by Newegg.com to leverage the selection code.
                    <p>
                        <a href="https://techlibrary.hpe.com/ie/en/networking/products/switches/switch-selector.aspx" target="_blank">Visit the HPE Switch Selector</a>
                    </p>
                </li>

                <li>
                    Mobile product pages - A set of pages spanning two business units that allows customers to view mobile-friendly product documentation by scanning a QR code on their given product. These pages are based on a XML/XSLT and JavaScript template that allows rapid implementation. Also being utilized by HPE support staff to help answer customer support requests.
                </li>
            </ul>

            <p className="work-heading">
                Education
            </p>

            <ul>
                <li>
                    Associates Degree in Web Application Development; MTI College, Sacramento, CA
                </li>

                <li>
                    UC Davis Coding Boot Camp (Dec 2021 to Present)
                </li>
            </ul>
        </section>
    </div>
  );
}