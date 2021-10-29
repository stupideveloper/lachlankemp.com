import BaseContainer from "../components/Containers/BaseContainer"
import Head from "next/head"
export default function Test() {
  return (
        <div className="text-white flex-col items-center justify-center min-h-screen bg-black">
          <Head>
            <title>Contact – Lachlan Kemp</title>
            <meta name="description" content="A person focusing on, Javascript, React, Svelte and new technologies." />
            <link rel="canonical" href="https://lachlankemp.com/" />
          </Head>
          <BaseContainer>
            <div>
              <h1 className="text-5xl font-bold">Contact Me</h1>
            </div>
            <div className="md:grid sm:grid-cols-2 block mt-8 gap-12">
              <div className="bg-cool-gray-800 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-medium">Phone</h3>
                <span className="text-cool-gray-500 text-sm">(All times in ACDT)</span>
                <table className="table-auto">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-cool-gray-300 pr-5 text-right">MON:</td>
                    <td>16:00-20:00</td>
                  </tr>
                  <tr >
                    <td className="text-cool-gray-300 pr-5 text-right">TUE:</td>
                    <td>16:00-20:00</td>
                  </tr>
                  <tr>
                    <td className="text-cool-gray-300 pr-5 text-right">WED:</td>
                    <td>16:00-20:00</td>
                  </tr>
                  <tr>
                    <td className="text-cool-gray-300 pr-5 text-right">THU:</td>
                    <td>16:00-20:00</td>
                  </tr>
                  <tr>
                    <td className="text-cool-gray-300 pr-5 text-right">FRI:</td>
                    <td>17:00-20:00</td>
                  </tr>
                  <tr>
                    <td className="text-cool-gray-300 pr-5 text-right">SAT:</td>
                    <td>10:00-21:00</td>
                  </tr>
                  <tr>
                    <td className="text-cool-gray-300 pr-5 text-right">SUN:</td>
                    <td>11:00-20:00</td>
                  </tr>
                </tbody>
                </table>
                <h4 className="mt-3 font-bold">Number:</h4>
                <a href="tel:+61-444-502-950">(+61) 444 502 950</a>
              </div>
              <div className="bg-cool-gray-800 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-medium">Email</h3>
                <span className="text-cool-gray-500 text-sm">(All times in ACDT)</span>
                <table className="table-auto">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-cool-gray-300 pr-5 text-right">MON:</td>
                    <td>10:00-20:00</td>
                  </tr>
                  <tr >
                    <td className="text-cool-gray-300 pr-5 text-right">TUE:</td>
                    <td>10:00-20:00</td>
                  </tr>
                  <tr>
                    <td className="text-cool-gray-300 pr-5 text-right">WED:</td>
                    <td>10:00-20:00</td>
                  </tr>
                  <tr>
                    <td className="text-cool-gray-300 pr-5 text-right">THU:</td>
                    <td>10:00-20:00</td>
                  </tr>
                  <tr>
                    <td className="text-cool-gray-300 pr-5 text-right">FRI:</td>
                    <td>10:00-20:00</td>
                  </tr>
                  <tr>
                    <td className="text-cool-gray-300 pr-5 text-right">SAT:</td>
                    <td>10:00-20:00</td>
                  </tr>
                  <tr>
                    <td className="text-cool-gray-300 pr-5 text-right">SUN:</td>
                    <td>10:00-20:00</td>
                  </tr>
                </tbody>
                </table>
                <h4 className="mt-3 font-bold">Email:</h4>
                <a href="mailto:me@lachlankemp.com">me@lachlankemp.com</a>
                <h4 className="mt-3 font-bold">Buisness Inquiries:</h4>
                <a href="mailto:hello@nomical-labs.com">hello@nomical-labs.com</a>
              </div>
            </div>
          </BaseContainer>
        </div>
  )
}