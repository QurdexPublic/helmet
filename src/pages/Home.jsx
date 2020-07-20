import React from 'react'
import {Helmet} from "react-helmet";

const Home = (props) => {
  return (
      <div>
        <Helmet htmlAttributes>
          <html lang="en"/>
          <title>Home</title>
          <meta name="description" content="React Helmet example Home"/>
        </Helmet>
        <div>
          <h1>Hong Kong's stock market sees its future in Chinese tech</h1>
          <div>
            <p>Police in Panama are investigating the killing of seven young people whose bodies were found in a wooded
              area near a lake on Saturday.
              The victims - four women and three men aged between 17 and 22 - were found near Gatún Lake, 50 miles
              (80km) north of the capital, Panama City.
              They had been in a group of 13 making a trip to the lake. The six who escaped said two armed men had
              attacked them.
              One person has been arrested, according to the public prosecutor's office.
            </p>
            <h3>What is known?</h3>
            <p>
              The bodies were found in a wooded area called Espinar in Colón province. Five of the bodies were in an
              abandoned bunker and two in separate locations in the woods.
              Forensic tests reveal that all of them had gunshot wounds to the head, local media report.
              The group of 13 youngsters - nine from Colón province and four who were visiting from Panama City - left
              on Friday morning to go swimming in Gatún Lake.
              Their families went to the police to raise the alarm when they had not returned home by Friday night.
              Relatives and locals searching for the missing youngsters came across the bodies on Saturday.
              The bunker where five of the bodies were located is a remnant from the time when the US Southern Command
              had bases in Panama.
            </p>
            <h3>What happened?</h3>
            <p>
              The surviving six described being attacked by two gunmen. A survivor said that one of the gunman had
              called one of those who was later killed by his name, which has led investigators to assume that the
              attack was not random.
              All of those killed lived in the same area in Colón called Valle Verde. The suspect under arrest comes
              from that same area.
              While some locals pointed out that the bunker had in the past been used by dealers to sell drugs,
              investigators have said that the victims had no known links to drugs or gangs but that they were a group
              of school and university students.
              Prosecutor Adolfo Pineda has revealed little detail about the lines of inquiry. He told reporters that it
              was "a shocking occurrence from all points of view".
              Investigators took five of the six survivors to the crime scene on Sunday to try and reconstruct what
              happened.
            </p>
          </div>
        </div>
      </div>
  )
}

export default Home