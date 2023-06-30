import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import CertificationPopup from "./CertificationPopup";
{
  /* big data */
}
const data1 = [
  {
    title: "PCAP™ – Certified Associate in Python Programming",
    img: "certificate/bigdata/python-certificate.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "PCAP™ – Certified Associate in Python Programming certification (Exam PCAP-31-0x) is a professional, high-stakes credential that measures the candidate's ability to perform intermediate-level coding tasks in the Python language, including the ability to design, develop, debug, execute, and refactor multi-module Python programs, as well as measures their skills and knowledge related to analyzing and modeling real-life problems in OOP categories with the use of the fundamental notions and techniques available in the object-oriented approach.",
      "The PCAP™ certification shows that the individual is familiar with the following concepts: modules, packages, and PIP, character encoding, strings and string processing, generators, iterators, closures, files, file streams, and file processing, exception hierarchies, and exception classes and objects, working with selected Standard Library modules, and the fundamentals of the Object-Oriented Programming (OOP) approach.",
      "Becoming PCAP™ certified ensures that the individual is fully acquainted with all the primary means provided by Python 3 to enable them to start their own studies at an advanced level, and to open a path to the developer’s career.",
    ],
  },
  {
    title: "Apache spark - python certificate",
    img: "certificate/bigdata/apache-spark-python-certificate.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "The Databricks Certified Associate Developer for Apache Spark certification exam assesses the understanding of the Spark DataFrame API and the ability to apply the Spark DataFrame API to complete basic data manipulation tasks within a Spark session.",
      "These tasks include selecting, renaming and manipulating columns; filtering, dropping, sorting, and aggregating rows; handling missing data; combining, reading, writing and partitioning DataFrames with schemas; and working with UDFs and Spark SQL functions. In addition, the exam will assess the basics of the Spark architecture like execution/deployment modes, the execution hierarchy, fault tolerance, garbage collection, and broadcasting.",
      "Individuals who pass this certification exam can be expected to complete basic Spark DataFrame tasks using Python or Scala.",
    ],
  },
  {
    title: "Tableau Desktop Specialist",
    img: "certificate/bigdata/tableau-desktop-specialist.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "Candidates for this certification deliver actionable insights by working with available data and applying domain expertise. They provide meaningful business value through easy-to-comprehend data visualizations, enable others to perform self-service analytics, and deploy and configure solutions for consumption.",
      "The Power BI data analyst works closely with business stakeholders to identify business requirements. They collaborate with enterprise data analysts and data engineers to identify and acquire data. They also transform the data, create data models, visualize data, and share assets by using Power BI.",
      "Candidates for this certification should be proficient at using Power Query and writing expressions by using Data Analysis Expressions (DAX). These professionals know how to assess data quality. Plus, they understand data security, including row-level security and data sensitivity.",
    ],
  },
  {
    title: "Microsoft® Power bi data analyst",
    img: "certificate/bigdata/microsoft-power-Bi-data-analyst.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "Candidates for this certification deliver actionable insights by working with available data and applying domain expertise. They provide meaningful business value through easy-to-comprehend data visualizations, enable others to perform self-service analytics, and deploy and configure solutions for consumption.",
      "The Power BI data analyst works closely with business stakeholders to identify business requirements. They collaborate with enterprise data analysts and data engineers to identify and acquire data. They also transform the data, create data models, visualize data, and share assets by using Power BI.",
      "Candidates for this certification should be proficient at using Power Query and writing expressions by using Data Analysis Expressions (DAX). These professionals know how to assess data quality. Plus, they understand data security, including row-level security and data sensitivity.",
    ],
  },
];
{
  /* cloud */
}
const data2 = [
  {
    title: "AWS Certified cloud practitioner",
    img: "certificate/cloud/AWS-certified-cloud-practitioner-certificate.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "AWS Cloud Quest: Cloud Practitioner",
      "AWS Cloud Quest is the first and only role-playing game to help you build in-demand AWS Cloud skills. Adventure awaits as you zap drones, befriend pets, and solve puzzles. Collect gems and earn points as you progress in building real solutions inside a live AWS environment. Prepare for the AWS Certified Cloud Practitioner exam with one of the most engaging cloud trainings you’ve ever taken.",
    ],
  },
  {
    title: "AWS Certified Solutions Architect - Associate certificate",
    img: "certificate/cloud/AWS-certified-solutions-architect-certificate.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "AWS Certified Solutions Architect - Associate showcases knowledge and skills in AWS technology, across a wide range of AWS services",
      "The focus of this certification is on the design of cost and performance optimized solutions, demonstrating a strong understanding of the AWS Well-Architected Framework. This certification can enhance the career profile and earnings of certified individuals and increase your credibility and confidence in stakeholder and customer interactions.",
    ],
  },
  {
    title: "AWS Certified devops engineer certificate",
    img: "certificate/cloud/AWS-certified-devops-engineer-certificate.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "The AWS Certified DevOps Engineer - Professional showcases individuals’ technical expertise in provisioning, operating, and managing distributed application systems on the AWS platform, giving them increased confidence and credibility with peers, stakeholders, and customers. Organizations with these qualified professionals can ensure speedy delivery of secure, compliant, systems that are highly available and scalable.",
      "The AWS Certified DevOps Engineer - Professional (DOP-C02) exam is intended for individuals who perform a DevOps engineer role. The exam validates a candidate’s technical expertise in provisioning, operating, and managing distributed systems and services on AWS..",
    ],
  },
  {
    title: "AWS Certified developer certificate",
    img: "certificate/cloud/AWS-certified-developer-certificate.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "AWS Certified Developer - Associate showcases knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS.",
      "Preparing for and attaining this certification gives certified individuals more confidence and credibility. Organizations with AWS Certified developers have the assurance of having the right talent to give them a competitive advantage and ensure stakeholder and customer satisfaction.",
    ],
  },
];
{
  /* database */
}
const data3 = [
  {
    title: "Oracle Advanced PLSQL Developer Certified Professional",
    img: "certificate/database/oracle-advanced-PLSQ-developer-certified-professional.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "Oracle offers a complete, integrated set of application development tools that support any development approach, technology platform, or operating system.",
      "Oracle Advanced PL/SQL Developer Certified Professionals demonstrate expertise in with database-centric Internet applications for Oracle Database 10g, 11g and 12c.",
    ],
  },
  {
    title: "Oracle Advanced PLSQL Developer Certified Associate",
    img: "certificate/database/oracle-advanced-PLSQ-developer-certified-associate.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "An Oracle Database PL/ SQL certification is a highly regarded certification and gives you skills that are very high in demand. Becoming an Oracle Database PL/ SQL certified associate means you are ready and well-equipped to use even the most advanced features of this programming language and undertake any database project.",
      "An Oracle PL/ SQL Developer knows how to use this procedural language and all its highly-advanced features, from performance to application code architecture. This certification equips you to provide guidance to your organisation at a more strategic level, which makes you an invaluable asset.",
    ],
  },
  {
    title: "Oracle Database SQL Certified Expert",
    img: "certificate/database/oracle-database-SQL-certified-expert.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "Demonstrate Oracle DB PL SQL Programming",
      "Oracle SQL is a programming language that allows database users and administrators to perform database tasks and undertake projects in fewer clicks and keystrokes. It is a graphical user interface that was designed with the objective of helping the user save time used during operations and maximise the return on investment (ROI) in the Oracle Database technology stack. It runs on any operating system that supports Java and supports Oracle Database 10g, 11g and 12g.",
    ],
  },
  {
    title: "Microsoft® MSSQL2008 Database developer",
    img: "certificate/database/MSSQL2008-database-developer.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: ["Writing Queries Using Microsoft SQL Server 2008 Transact-SQL"],
  },
  {
    title: "Microsoft® MSSQL2008 Database administrator",
    img: "certificate/database/MSSQL2008-database-administrator.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "PRO: Designing, Optimizing and Maintaining a Database Server Infrastructure using Microsoft SQL Server 2008",
    ],
  },
  {
    title:
      "Microsoft® Certified Technology Specialist: SQL Server 2008, Implementation and Maintenance",
    img: "certificate/database/MSSQL2008-technology-specialist.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "Microsoft SQL Server continues to grow its market share as the foundation of Microsoft’s push to integrate Business Intelligence (BI) within enterprise environments. Passing the Microsoft SQL Server 2008 Implementation and Maintenance exam will validate your ability to support this growing market segment. Upon successful completion of this exam, candidates receive Microsoft Certified Technology Specialist (MCTS) certification for SQL Server 2008, Implementation and Maintenance. If this is your first professional Microsoft certification, you will also gain Microsoft Certified Professional (MCP) status. Microsoft Certified Technology Specialist for SQL Server 2008, Implementation and Maintenance is the only prerequisite for Microsoft’s Certified IT Professional (MCITP) Database Administrator 2008 certification. This two-exam track is one of the shortest to Microsoft’s new Certified IT Professional status. The alternative SQL MCITP tracks are Database Developer 2008 and Business Intelligence Developer 2008. There are no overlapping exams between these three tracks.",
    ],
  },
];
{
  /* java programming */
}
const data4 = [
  {
    title: "Oracle Certified Associate- Java SE 8 Programmer Certificate",
    img: "certificate/java/java-se8-programmer.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "The Java SE 8 Oracle Certified Associate (OCA) certification helps you build a foundational understanding of Java, and gaining this certification credential is the first of two steps in demonstrating you have the high-level skills needed to become a professional Java developer.",
    ],
  },
  {
    title: "Spring professional v5 certificate",
    img: "certificate/java/springv5-framework.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "This brand-new generation of the framework is ready for 2018 and beyond: with support for JDK 9 and the Java EE 8 API level (e.g. Servlet 4.0), as well as comprehensive integration with Reactor 3.1, JUnit 5, and the Kotlin language. On top of that all, Spring Framework 5 comes with many functional API variants and introduces a dedicated reactive web framework called Spring WebFlux, next to a revised version of our Servlet-based web framework Spring MVC",
      "Upgrading to Version 5.3Third-Party APIs and Libraries",
      "For Kotlin:Kotlin support has been upgraded to Kotlin 1.4 and is still compatible with Kotlin 1.3+ Kotlin Coroutines 1.4 (which builds on Kotlin 1.4) or above is now required for coroutines support.For Kotlin scripting, Kotlin 1.4 users should declare the kotlin-scripting-jsr223 dependency instead of kotlin-scripting-jsr223-embeddable.",
    ],
  },
];
{
  /* microsoft programming */
}
const data5 = [
  {
    title: "Microsoft® Certified Professional Developer: Windows Developer 4",
    img: "certificate/microsoft/microsoft-certified-web-developer.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Microsoft® Certified Professional Developer: Web Developer 4",
    img: "certificate/microsoft/microsoft-certified-windows-developer.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
];
{
  /* agile scrum */
}
const data6 = [
  {
    title: "scrum master",
    img: "certificate/scrum/scrum-master.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "Certified Agile Scrum Master (CASM)® certified individuals have the knowledge and understanding of the Scrum Framework required to allow them to successfully fill the Scrum Master role in Scrum teams along with Agile Knowledge.",
      "The role of the Certified Agile Scrum Master (CASM)® in a software company is changing. No longer is it about driving people to achieve results. Now it is about enabling teams to be hyper-productive. But how can this be accomplished? Scrum, an agile framework, has been used successfully to build hyper-productive teams. What is Scrum? How can a manager build hyper-productive teams that outpace everyone else? In this talk you will hear exactly what Scrum is, its base components, and the traits required to help ensure success.",
    ],
  },
];
{
  /* low code system*/
}
const data7 = [
  {
    title: "outsystems developer",
    img: "certificate/outsystems/outsystems-developer.jpg",
    tag: "Accreditation",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "The Associate Reactive Developer exam focuses on the fundamentals of OutSystems reactive web and mobile application development. Targeted for developers who are new to OutSystems and develop simple reactive web and mobile applications. This is one of the first steps to kickstart your OutSystems journey as a certified developer.",
    ],
  },
];
const Certification = () => {
  const { nav } = useContext(NavContext);
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(value);
  };
  return (
    <Fragment>
      <CertificationPopup
        open={modal}
        close={() => setModal(false)}
        data={activeData}
      />
      <section
        id="certification"
        className={`${nav === "certification" ? "active" : ""}`}
      >
        <div className="container page-title text-center">
          <h2 className="text-center">
            it <span>certifications</span>
          </h2>
          {/* <span className="title-head-subtitle">
            successfully completed the exam certifications
          </span> */}
        </div>

        {/* big data */}
        <div className="col-xl-9 col-lg-9 col-md-9">
          <h2 className="font-weight-600 uppercase title-section">
            big data/analytics
          </h2>
        </div>

        <div className="container">
          <div className="row">
            {data1.map((data1, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(data1, i)}>
                      <img className="img-fluid" src={data1.img} alt="" />
                    </a>
                    <div className="post-date">
                      {" "}
                      <span>{data1.date.date}</span>
                      <span>{data1.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(data1, i)}>
                    <h4>{data1.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data1.des[0].substring(0, 92)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(data1, i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
            <br />
          </div>
        </div>
        {/* cloud */}
        <div className="col-xl-9 col-lg-9 col-md-9">
          <h2 className="font-weight-600 uppercase title-section">cloud</h2>
        </div>

        <div className="container">
          <div className="row">
            {data2.map((data2, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(data2, i)}>
                      <img className="img-fluid" src={data2.img} alt="" />
                    </a>
                    <div className="post-date">
                      {" "}
                      <span>{data2.date.date}</span>
                      <span>{data2.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(data2, i)}>
                    <h4>{data2.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data2.des[0].substring(0, 92)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(data2, i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
            <br />
          </div>
        </div>
        {/* database */}
        <div className="col-xl-9 col-lg-9 col-md-9">
          <h2 className="font-weight-600 uppercase title-section">database</h2>
        </div>

        <div className="container">
          <div className="row">
            {data3.map((data3, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(data3, i)}>
                      <img className="img-fluid" src={data3.img} alt="" />
                    </a>
                    <div className="post-date">
                      {" "}
                      <span>{data3.date.date}</span>
                      <span>{data3.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(data3, i)}>
                    <h4>{data3.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data3.des[0].substring(0, 92)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(data3, i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
            <br />
          </div>
        </div>

        {/* java programming */}
        <div className="col-xl-9 col-lg-9 col-md-9">
          <h2 className="font-weight-600 uppercase title-section">
            java programming
          </h2>
        </div>

        <div className="container">
          <div className="row">
            {data4.map((data4, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(data4, i)}>
                      <img className="img-fluid" src={data4.img} alt="" />
                    </a>
                    <div className="post-date">
                      {" "}
                      <span>{data4.date.date}</span>
                      <span>{data4.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(data4, i)}>
                    <h4>{data4.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data4.des[0].substring(0, 92)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(data4, i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
            <br />
          </div>
        </div>

        {/* microsoft programming */}
        <div className="col-xl-9 col-lg-9 col-md-9">
          <h2 className="font-weight-600 uppercase title-section">
            microsoft programming
          </h2>
        </div>

        <div className="container">
          <div className="row">
            {data5.map((data5, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(data5, i)}>
                      <img className="img-fluid" src={data5.img} alt="" />
                    </a>
                    <div className="post-date">
                      {" "}
                      <span>{data5.date.date}</span>
                      <span>{data5.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(data5, i)}>
                    <h4>{data5.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data5.des[0].substring(0, 92)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(data5, i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
            <br />
          </div>
        </div>

        {/* agile scrum */}
        <div className="col-xl-9 col-lg-9 col-md-9">
          <h2 className="font-weight-600 uppercase title-section">
            agile scrum
          </h2>
        </div>

        <div className="container">
          <div className="row">
            {data6.map((data6, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(data6, i)}>
                      <img className="img-fluid" src={data6.img} alt="" />
                    </a>
                    <div className="post-date">
                      {" "}
                      <span>{data6.date.date}</span>
                      <span>{data6.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(data6, i)}>
                    <h4>{data6.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data6.des[0].substring(0, 92)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(data6, i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
            <br />
          </div>
        </div>

        {/* low code system */}
        <div className="col-xl-9 col-lg-9 col-md-9">
          <h2 className="font-weight-600 uppercase title-section">
            outsystems
          </h2>
        </div>

        <div className="container">
          <div className="row">
            {data7.map((data7, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(data7, i)}>
                      <img className="img-fluid" src={data7.img} alt="" />
                    </a>
                    <div className="post-date">
                      {" "}
                      <span>{data7.date.date}</span>
                      <span>{data7.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(data7, i)}>
                    <h4>{data7.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data7.des[0].substring(0, 92)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(data7, i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
            <br />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Certification;
