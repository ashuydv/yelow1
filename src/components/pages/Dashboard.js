import React from "react";
import AveragePrice from "./AveragePrice";
import LatestTransaction from "./LatestTransaction";
import Orders from "./Orders";
import OrdersTable from "./OrdersTable";
import Revenue from "./Revenue";
import WelcomeCard from "./WelcomeCard";
import "../style.css";

const Dashboard = () => {
  return (
    <div>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">Dashboard</h4>
                  <div className="page-title-right">
                    <nav className="" aria-label="breadcrumb">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="/dashboard">Dashboards</a>
                        </li>
                        <li
                          className="active breadcrumb-item"
                          aria-current="page"
                        >
                          <a href="/dashboard">Dashboard</a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <WelcomeCard />
              </div>
              <div className="col-lg-3">
                <Orders />
              </div>
              <div className="col-lg-3">
                <Revenue />
              </div>
              <div className="col-lg-3">
                <AveragePrice />
              </div>
              <div className="col-lg-12">
                <OrdersTable />
              </div>
              {/* <div className="col-lg-12">
                <LatestTransaction />
              </div> */}
              {/* <div className="card">
                    <div className="card-body">
                      <div className="d-sm-flex flex-wrap">
                        <div className="card-title mb-4 h4 card-title">
                          Email Sent
                        </div>
                        <div className="ms-auto">
                          <ul className="nav nav-pills">
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="one_month"
                                href="/dashboard"
                              >
                                Week
                              </a>{" "}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="one_month"
                                href="/dashboard"
                              >
                                Month
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="active nav-link"
                                id="one_month"
                                href="/dashboard"
                              >
                                Year
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div
                        options="[object Object]"
                        series="[object Object],[object Object],[object Object]"
                        type="bar"
                        height="360"
                        className="apex-charts"
                        width="100%"
                        style={{minHeight: "375px"}}
                      >
                        <div
                          id="apexchartspskux77v"
                          className="apexcharts-canvas apexchartspskux77v apexcharts-theme-light"
                          style={{width: "766px", height: "360px"}}
                        >
                          <svg
                            id="SvgjsSvg1898"
                            width="766"
                            height="360"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlnsSvgjs="http://svgjs.dev"
                            className="apexcharts-svg"
                            xmlnsData="ApexChartsNS"
                            transform="translate(0, 0)"
                            style={{background: "transparent"}}
                          >
                            <foreignObject x="0" y="0" width="766" height="360">
                              <div
                                className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"
                                xmlns="http://www.w3.org/1999/xhtml"
                                style={{inset: "auto 0px 1px", position: "absolute", maxHeight: '180px'}}
                              >
                                <div
                                  className="apexcharts-legend-series"
                                  rel="1"
                                  seriesname="SeriesxA"
                                  dataCollapsed="false"
                                  style={{margin: "2px 5px"}}
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    rel="1"
                                    dataCollapsed="false"
                                    style={{background: "rgb(85, 110, 230) !important", color: 'rgb(85, 110, 230)', height: "12px", width: "12px", left: "0px", top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "2px"}}
                                  ></span>
                                  <span
                                    className="apexcharts-legend-text"
                                    rel="1"
                                    i="0"
                                    dataDefault-text="Series%20A"
                                    dataCollapsed="false"
                                    style={{color: "rgb(55, 61, 63)", fontSize: "12px", fontWeight: "400", fontFamily: "Helvetica, Arial, sans-serif"}}
                                  >
                                    Series A
                                  </span>
                                </div>
                                <div
                                  className="apexcharts-legend-series"
                                  rel="2"
                                  seriesname="SeriesxB"
                                  dataCollapsed="false"
                                  style={{margin: "2px 5px"}}
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    rel="2"
                                    dataCollapsed="false"
                                    style={{background: "rgb(241, 180, 76) !important", color: "rgb(241, 180, 76)", height: "12px", width: "12px", left: "0px", top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "2px"}}
                                  ></span>
                                  <span
                                    className="apexcharts-legend-text"
                                    rel="2"
                                    i="1"
                                    dataDefaultText="Series%20B"
                                    dataCollapsed="false"
                                    style={{color: "rgb(55, 61, 63)", fontSize: "12px", fontWeight: "400", fontFamily: "Helvetica, Arial, sans-serif"}}
                                  >
                                    Series B
                                  </span>
                                </div>
                                <div
                                  className="apexcharts-legend-series"
                                  rel="3"
                                  seriesname="SeriesxC"
                                  dataCollapsed="false"
                                  style={{margin: "2px 5px"}}
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    rel="3"
                                    dataCollapsed="false"
                                    style={{background: 'rgb(52, 195, 143) !important', color: "rgb(52, 195, 143)", height: "12px", width: "12px", left: "0px", 
                                    top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "2px"}}
                                  ></span>
                                  <span
                                    className="apexcharts-legend-text"
                                    rel="3"
                                    i="2"
                                    dataDefaultText="Series%20C"
                                    dataCollapsed="false"
                                    style={{color: "rgb(55, 61, 63)", fontSize: "12px", fontWeight: "400", fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    Series C
                                  </span>
                                </div>
                              </div>
                     <style type="text/css">	    	
      .apexcharts-legend {	
        display: flex;	
        overflow: auto;	
        padding: 0 1"0px",	
      }	
      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {	
        flex-wrap: wrap	
      }	
      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {	
        flex-direction: column;	
        bottom: 0;	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {	
        justify-content: flex-start;	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {	
        justify-content: center;  	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {	
        justify-content: flex-end;	
      }	
      .apexcharts-legend-series {	
        cursor: pointer;	
        line-height: normal;	
      }	
      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{	
        display: flex;	
        align-items: center;	
      }	
      .apexcharts-legend-text {	
        position: relative;	
        fontSize: 14px;	
      }	
      .apexcharts-legend-text *, .apexcharts-legend-marker * {	
        pointer-events: none;	
      }	
      .apexcharts-legend-marker {	
        position: relative;	
        display: inline-"block";	
        cursor: pointer;	
        margin-right: 3px;	
        border-style: solid;
      }	
      	
      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{	
        display: inline-"block";	
      }	
      .apexcharts-legend-series.apexcharts-no-click {	
        cursor: auto;	
      }	
      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {	
        display: "none" !important;	
      }	
      .apexcharts-inactive-legend {	
        opacity: 0.45;	
      }</style> 
                            </foreignObject>
                            <g
                              id="SvgjsG1900"
                              className="apexcharts-inner apexcharts-graphical"
                              transform="translate(44.62797927856445, 30)"
                            >
                              <defs id="SvgjsDefs1899">
                                <linearGradient
                                  id="SvgjsLinearGradient1904"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    id="SvgjsStop1905"
                                    stop-opacity="0.4"
                                    stop-color="rgba(216,227,240,0.4)"
                                    offset="0"
                                  ></stop>
                                  <stop
                                    id="SvgjsStop1906"
                                    stop-opacity="0.5"
                                    stop-color="rgba(190,209,230,0.5)"
                                    offset="1"
                                  ></stop>
                                  <stop
                                    id="SvgjsStop1907"
                                    stop-opacity="0.5"
                                    stop-color="rgba(190,209,230,0.5)"
                                    offset="1"
                                  ></stop>
                                </linearGradient>
                                <clipPath id="gridRectMaskpskux77v">
                                  <rect
                                    id="SvgjsRect1909"
                                    width="715.3720207214355"
                                    height="263.81759814834595"
                                    x="-2"
                                    y="0"
                                    rx="0"
                                    ry="0"
                                    opacity="1"
                                    strokeWidth="0"
                                    stroke="none"
                                    strokeDasharray="0"
                                    fill="#fff"
                                  ></rect>
                                </clipPath>
                                <clipPath id="forecastMaskpskux77v"></clipPath>
                                <clipPath id="nonForecastMaskpskux77v"></clipPath>
                                <clipPath id="gridRectMarkerMaskpskux77v">
                                  <rect
                                    id="SvgjsRect1910"
                                    width="715.3720207214355"
                                    height="267.81759814834595"
                                    x="-2"
                                    y="-2"
                                    rx="0"
                                    ry="0"
                                    opacity="1"
                                    strokeWidth="0"
                                    stroke="none"
                                    strokeDasharray="0"
                                    fill="#fff"
                                  ></rect>
                                </clipPath>
                              </defs>
                              <rect
                                id="SvgjsRect1908"
                                width="8.892150259017944"
                                height="263.81759814834595"
                                x="0"
                                y="0"
                                rx="0"
                                ry="0"
                                opacity="1"
                                strokeWidth="0"
                                strokeDasharray="3"
                                fill="url(#SvgjsLinearGradient1904)"
                                className="apexcharts-xcrosshairs"
                                y2="263.81759814834595"
                                filter="none"
                                fillOpacity="0.9"
                              ></rect>
                              <g
                                id="SvgjsG1954"
                                className="apexcharts-xaxis"
                                transform="translate(0, 0)"
                              >
                                <g
                                  id="SvgjsG1955"
                                  className="apexcharts-xaxis-texts-g"
                                  transform="translate(0, -4)"
                                >
                                  <text
                                    id="SvgjsText1957"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="29.640500863393147"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1958">Jan</tspan>
                                    <title>Jan</title>
                                  </text>
                                  <text
                                    id="SvgjsText1960"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="88.92150259017944"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1961">Feb</tspan>
                                    <title>Feb</title>
                                  </text>
                                  <text
                                    id="SvgjsText1963"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="148.20250431696573"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1964">Mar</tspan>
                                    <title>Mar</title>
                                  </text>
                                  <text
                                    id="SvgjsText1966"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="207.48350604375202"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1967">Apr</tspan>
                                    <title>Apr</title>
                                  </text>
                                  <text
                                    id="SvgjsText1969"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="266.76450777053833"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1970">May</tspan>
                                    <title>May</title>
                                  </text>
                                  <text
                                    id="SvgjsText1972"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="326.04550949732464"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1973">Jun</tspan>
                                    <title>Jun</title>
                                  </text>
                                  <text
                                    id="SvgjsText1975"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="385.32651122411096"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1976">Jul</tspan>
                                    <title>Jul</title>
                                  </text>
                                  <text
                                    id="SvgjsText1978"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="444.6075129508973"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1979">Aug</tspan>
                                    <title>Aug</title>
                                  </text>
                                  <text
                                    id="SvgjsText1981"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="503.88851467768353"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1982">Sep</tspan>
                                    <title>Sep</title>
                                  </text>
                                  <text
                                    id="SvgjsText1984"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="563.1695164044697"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1985">Oct</tspan>
                                    <title>Oct</title>
                                  </text>
                                  <text
                                    id="SvgjsText1987"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="622.450518131256"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1988">Nov</tspan>
                                    <title>Nov</title>
                                  </text>
                                  <text
                                    id="SvgjsText1990"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="681.7315198580422"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1991">Dec</tspan>
                                    <title>Dec</title>
                                  </text>
                                </g>
                                <line
                                  id="SvgjsLine1992"
                                  x1="0"
                                  y1="264.81759814834595"
                                  x2="711.3720207214355"
                                  y2="264.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeWidth="1"
                                  strokeLinecap="butt"
                                ></line>
                              </g>
                              <g id="SvgjsG2007" className="apexcharts-grid">
                                <g
                                  id="SvgjsG2008"
                                  className="apexcharts-gridlines-horizontal"
                                >
                                  <line
                                    id="SvgjsLine2023"
                                    x1="0"
                                    y1="0"
                                    x2="711.3720207214355"
                                    y2="0"
                                    stroke="#e0e0e0"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine2024"
                                    x1="0"
                                    y1="52.76351962966919"
                                    x2="711.3720207214355"
                                    y2="52.76351962966919"
                                    stroke="#e0e0e0"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine2025"
                                    x1="0"
                                    y1="105.52703925933838"
                                    x2="711.3720207214355"
                                    y2="105.52703925933838"
                                    stroke="#e0e0e0"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine2026"
                                    x1="0"
                                    y1="158.29055888900757"
                                    x2="711.3720207214355"
                                    y2="158.29055888900757"
                                    stroke="#e0e0e0"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine2027"
                                    x1="0"
                                    y1="211.05407851867676"
                                    x2="711.3720207214355"
                                    y2="211.05407851867676"
                                    stroke="#e0e0e0"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine2028"
                                    x1="0"
                                    y1="263.81759814834595"
                                    x2="711.3720207214355"
                                    y2="263.81759814834595"
                                    stroke="#e0e0e0"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  ></line>
                                </g>
                                <g
                                  id="SvgjsG2009"
                                  className="apexcharts-gridlines-vertical"
                                ></g>
                                <line
                                  id="SvgjsLine2010"
                                  x1="0"
                                  y1="264.81759814834595"
                                  x2="0"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2011"
                                  x1="59.28100172678629"
                                  y1="264.81759814834595"
                                  x2="59.28100172678629"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2012"
                                  x1="118.56200345357259"
                                  y1="264.81759814834595"
                                  x2="118.56200345357259"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2013"
                                  x1="177.8430051803589"
                                  y1="264.81759814834595"
                                  x2="177.8430051803589"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2014"
                                  x1="237.12400690714517"
                                  y1="264.81759814834595"
                                  x2="237.12400690714517"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2015"
                                  x1="296.40500863393146"
                                  y1="264.81759814834595"
                                  x2="296.40500863393146"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2016"
                                  x1="355.6860103607178"
                                  y1="264.81759814834595"
                                  x2="355.6860103607178"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2017"
                                  x1="414.9670120875041"
                                  y1="264.81759814834595"
                                  x2="414.9670120875041"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2018"
                                  x1="474.2480138142904"
                                  y1="264.81759814834595"
                                  x2="474.2480138142904"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2019"
                                  x1="533.5290155410767"
                                  y1="264.81759814834595"
                                  x2="533.5290155410767"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2020"
                                  x1="592.8100172678629"
                                  y1="264.81759814834595"
                                  x2="592.8100172678629"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2021"
                                  x1="652.0910189946492"
                                  y1="264.81759814834595"
                                  x2="652.0910189946492"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2022"
                                  x1="711.3720207214354"
                                  y1="264.81759814834595"
                                  x2="711.3720207214354"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2030"
                                  x1="0"
                                  y1="263.81759814834595"
                                  x2="711.3720207214355"
                                  y2="263.81759814834595"
                                  stroke="transparent"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                ></line>
                                <line
                                  id="SvgjsLine2029"
                                  x1="0"
                                  y1="1"
                                  x2="0"
                                  y2="263.81759814834595"
                                  stroke="transparent"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                ></line>
                              </g>
                              <g
                                id="SvgjsG1911"
                                className="apexcharts-bar-series apexcharts-plot-series"
                              >
                                <g
                                  id="SvgjsG1912"
                                  className="apexcharts-series"
                                  seriesName="SeriesxA"
                                  rel="1"
                                  dataRealIndex="0"
                                >
                                  <path
                                    id="SvgjsPath1914"
                                    d="M 25.194425733884174 263.81759814834595L 25.194425733884174 147.73785496307374Q 25.194425733884174 147.73785496307374 25.194425733884174 147.73785496307374L 34.08657599290212 147.73785496307374Q 34.08657599290212 147.73785496307374 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374L 34.08657599290212 263.81759814834595L 34.08657599290212 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 25.194425733884174 263.81759814834595L 25.194425733884174 147.73785496307374Q 25.194425733884174 147.73785496307374 25.194425733884174 147.73785496307374L 34.08657599290212 147.73785496307374Q 34.08657599290212 147.73785496307374 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374L 34.08657599290212 263.81759814834595L 34.08657599290212 263.81759814834595z"
                                    pathFrom="M 25.194425733884174 263.81759814834595L 25.194425733884174 263.81759814834595L 34.08657599290212 263.81759814834595L 34.08657599290212 263.81759814834595L 34.08657599290212 263.81759814834595L 34.08657599290212 263.81759814834595L 34.08657599290212 263.81759814834595L 25.194425733884174 263.81759814834595"
                                    cy="147.73785496307374"
                                    cx="84.47542746067046"
                                    j="0"
                                    val="44"
                                    barHeight="116.07974318527222"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1915"
                                    d="M 84.47542746067046 263.81759814834595L 84.47542746067046 118.71791916675568Q 84.47542746067046 118.71791916675568 84.47542746067046 118.71791916675568L 93.3675777196884 118.71791916675568Q 93.3675777196884 118.71791916675568 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568L 93.3675777196884 263.81759814834595L 93.3675777196884 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 84.47542746067046 263.81759814834595L 84.47542746067046 118.71791916675568Q 84.47542746067046 118.71791916675568 84.47542746067046 118.71791916675568L 93.3675777196884 118.71791916675568Q 93.3675777196884 118.71791916675568 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568L 93.3675777196884 263.81759814834595L 93.3675777196884 263.81759814834595z"
                                    pathFrom="M 84.47542746067046 263.81759814834595L 84.47542746067046 263.81759814834595L 93.3675777196884 263.81759814834595L 93.3675777196884 263.81759814834595L 93.3675777196884 263.81759814834595L 93.3675777196884 263.81759814834595L 93.3675777196884 263.81759814834595L 84.47542746067046 263.81759814834595"
                                    cy="118.71791916675568"
                                    cx="143.75642918745675"
                                    j="1"
                                    val="55"
                                    barHeight="145.09967898159027"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1916"
                                    d="M 143.75642918745675 263.81759814834595L 143.75642918745675 155.6523829075241Q 143.75642918745675 155.6523829075241 143.75642918745675 155.6523829075241L 152.64857944647468 155.6523829075241Q 152.64857944647468 155.6523829075241 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241L 152.64857944647468 263.81759814834595L 152.64857944647468 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 143.75642918745675 263.81759814834595L 143.75642918745675 155.6523829075241Q 143.75642918745675 155.6523829075241 143.75642918745675 155.6523829075241L 152.64857944647468 155.6523829075241Q 152.64857944647468 155.6523829075241 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241L 152.64857944647468 263.81759814834595L 152.64857944647468 263.81759814834595z"
                                    pathFrom="M 143.75642918745675 263.81759814834595L 143.75642918745675 263.81759814834595L 152.64857944647468 263.81759814834595L 152.64857944647468 263.81759814834595L 152.64857944647468 263.81759814834595L 152.64857944647468 263.81759814834595L 152.64857944647468 263.81759814834595L 143.75642918745675 263.81759814834595"
                                    cy="155.6523829075241"
                                    cx="203.03743091424303"
                                    j="2"
                                    val="41"
                                    barHeight="108.16521524082184"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1917"
                                    d="M 203.03743091424303 263.81759814834595L 203.03743091424303 87.05980738895417Q 203.03743091424303 87.05980738895417 203.03743091424303 87.05980738895417L 211.92958117326097 87.05980738895417Q 211.92958117326097 87.05980738895417 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417L 211.92958117326097 263.81759814834595L 211.92958117326097 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 203.03743091424303 263.81759814834595L 203.03743091424303 87.05980738895417Q 203.03743091424303 87.05980738895417 203.03743091424303 87.05980738895417L 211.92958117326097 87.05980738895417Q 211.92958117326097 87.05980738895417 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417L 211.92958117326097 263.81759814834595L 211.92958117326097 263.81759814834595z"
                                    pathFrom="M 203.03743091424303 263.81759814834595L 203.03743091424303 263.81759814834595L 211.92958117326097 263.81759814834595L 211.92958117326097 263.81759814834595L 211.92958117326097 263.81759814834595L 211.92958117326097 263.81759814834595L 211.92958117326097 263.81759814834595L 203.03743091424303 263.81759814834595"
                                    cy="87.05980738895417"
                                    cx="262.31843264102935"
                                    j="3"
                                    val="67"
                                    barHeight="176.75779075939178"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1918"
                                    d="M 262.31843264102935 263.81759814834595L 262.31843264102935 205.77772655570985Q 262.31843264102935 205.77772655570985 262.31843264102935 205.77772655570985L 271.2105829000473 205.77772655570985Q 271.2105829000473 205.77772655570985 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985L 271.2105829000473 263.81759814834595L 271.2105829000473 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 262.31843264102935 263.81759814834595L 262.31843264102935 205.77772655570985Q 262.31843264102935 205.77772655570985 262.31843264102935 205.77772655570985L 271.2105829000473 205.77772655570985Q 271.2105829000473 205.77772655570985 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985L 271.2105829000473 263.81759814834595L 271.2105829000473 263.81759814834595z"
                                    pathFrom="M 262.31843264102935 263.81759814834595L 262.31843264102935 263.81759814834595L 271.2105829000473 263.81759814834595L 271.2105829000473 263.81759814834595L 271.2105829000473 263.81759814834595L 271.2105829000473 263.81759814834595L 271.2105829000473 263.81759814834595L 262.31843264102935 263.81759814834595"
                                    cy="205.77772655570985"
                                    cx="321.59943436781566"
                                    j="4"
                                    val="22"
                                    barHeight="58.03987159263611"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1919"
                                    d="M 321.59943436781566 263.81759814834595L 321.59943436781566 150.37603094455721Q 321.59943436781566 150.37603094455721 321.59943436781566 150.37603094455721L 330.4915846268336 150.37603094455721Q 330.4915846268336 150.37603094455721 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721L 330.4915846268336 263.81759814834595L 330.4915846268336 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 321.59943436781566 263.81759814834595L 321.59943436781566 150.37603094455721Q 321.59943436781566 150.37603094455721 321.59943436781566 150.37603094455721L 330.4915846268336 150.37603094455721Q 330.4915846268336 150.37603094455721 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721L 330.4915846268336 263.81759814834595L 330.4915846268336 263.81759814834595z"
                                    pathFrom="M 321.59943436781566 263.81759814834595L 321.59943436781566 263.81759814834595L 330.4915846268336 263.81759814834595L 330.4915846268336 263.81759814834595L 330.4915846268336 263.81759814834595L 330.4915846268336 263.81759814834595L 330.4915846268336 263.81759814834595L 321.59943436781566 263.81759814834595"
                                    cy="150.37603094455721"
                                    cx="380.880436094602"
                                    j="5"
                                    val="43"
                                    barHeight="113.44156720378875"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1920"
                                    d="M 380.880436094602 263.81759814834595L 380.880436094602 168.8432628149414Q 380.880436094602 168.8432628149414 380.880436094602 168.8432628149414L 389.77258635361994 168.8432628149414Q 389.77258635361994 168.8432628149414 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414L 389.77258635361994 263.81759814834595L 389.77258635361994 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 380.880436094602 263.81759814834595L 380.880436094602 168.8432628149414Q 380.880436094602 168.8432628149414 380.880436094602 168.8432628149414L 389.77258635361994 168.8432628149414Q 389.77258635361994 168.8432628149414 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414L 389.77258635361994 263.81759814834595L 389.77258635361994 263.81759814834595z"
                                    pathFrom="M 380.880436094602 263.81759814834595L 380.880436094602 263.81759814834595L 389.77258635361994 263.81759814834595L 389.77258635361994 263.81759814834595L 389.77258635361994 263.81759814834595L 389.77258635361994 263.81759814834595L 389.77258635361994 263.81759814834595L 380.880436094602 263.81759814834595"
                                    cy="168.8432628149414"
                                    cx="440.1614378213883"
                                    j="6"
                                    val="36"
                                    barHeight="94.97433533340454"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1921"
                                    d="M 440.1614378213883 263.81759814834595L 440.1614378213883 126.63244711120606Q 440.1614378213883 126.63244711120606 440.1614378213883 126.63244711120606L 449.05358808040626 126.63244711120606Q 449.05358808040626 126.63244711120606 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606L 449.05358808040626 263.81759814834595L 449.05358808040626 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 440.1614378213883 263.81759814834595L 440.1614378213883 126.63244711120606Q 440.1614378213883 126.63244711120606 440.1614378213883 126.63244711120606L 449.05358808040626 126.63244711120606Q 449.05358808040626 126.63244711120606 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606L 449.05358808040626 263.81759814834595L 449.05358808040626 263.81759814834595z"
                                    pathFrom="M 440.1614378213883 263.81759814834595L 440.1614378213883 263.81759814834595L 449.05358808040626 263.81759814834595L 449.05358808040626 263.81759814834595L 449.05358808040626 263.81759814834595L 449.05358808040626 263.81759814834595L 449.05358808040626 263.81759814834595L 440.1614378213883 263.81759814834595"
                                    cy="126.63244711120606"
                                    cx="499.4424395481746"
                                    j="7"
                                    val="52"
                                    barHeight="137.1851510371399"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1922"
                                    d="M 499.4424395481746 263.81759814834595L 499.4424395481746 200.50137459274293Q 499.4424395481746 200.50137459274293 499.4424395481746 200.50137459274293L 508.3345898071926 200.50137459274293Q 508.3345898071926 200.50137459274293 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293L 508.3345898071926 263.81759814834595L 508.3345898071926 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 499.4424395481746 263.81759814834595L 499.4424395481746 200.50137459274293Q 499.4424395481746 200.50137459274293 499.4424395481746 200.50137459274293L 508.3345898071926 200.50137459274293Q 508.3345898071926 200.50137459274293 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293L 508.3345898071926 263.81759814834595L 508.3345898071926 263.81759814834595z"
                                    pathFrom="M 499.4424395481746 263.81759814834595L 499.4424395481746 263.81759814834595L 508.3345898071926 263.81759814834595L 508.3345898071926 263.81759814834595L 508.3345898071926 263.81759814834595L 508.3345898071926 263.81759814834595L 508.3345898071926 263.81759814834595L 499.4424395481746 263.81759814834595"
                                    cy="200.50137459274293"
                                    cx="558.7234412749609"
                                    j="8"
                                    val="24"
                                    barHeight="63.316223555603024"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1923"
                                    d="M 558.7234412749609 263.81759814834595L 558.7234412749609 216.33043048164367Q 558.7234412749609 216.33043048164367 558.7234412749609 216.33043048164367L 567.6155915339789 216.33043048164367Q 567.6155915339789 216.33043048164367 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367L 567.6155915339789 263.81759814834595L 567.6155915339789 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 558.7234412749609 263.81759814834595L 558.7234412749609 216.33043048164367Q 558.7234412749609 216.33043048164367 558.7234412749609 216.33043048164367L 567.6155915339789 216.33043048164367Q 567.6155915339789 216.33043048164367 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367L 567.6155915339789 263.81759814834595L 567.6155915339789 263.81759814834595z"
                                    pathFrom="M 558.7234412749609 263.81759814834595L 558.7234412749609 263.81759814834595L 567.6155915339789 263.81759814834595L 567.6155915339789 263.81759814834595L 567.6155915339789 263.81759814834595L 567.6155915339789 263.81759814834595L 567.6155915339789 263.81759814834595L 558.7234412749609 263.81759814834595"
                                    cy="216.33043048164367"
                                    cx="618.0044430017472"
                                    j="9"
                                    val="18"
                                    barHeight="47.48716766670227"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1924"
                                    d="M 618.0044430017472 263.81759814834595L 618.0044430017472 168.8432628149414Q 618.0044430017472 168.8432628149414 618.0044430017472 168.8432628149414L 626.8965932607651 168.8432628149414Q 626.8965932607651 168.8432628149414 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414L 626.8965932607651 263.81759814834595L 626.8965932607651 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 618.0044430017472 263.81759814834595L 618.0044430017472 168.8432628149414Q 618.0044430017472 168.8432628149414 618.0044430017472 168.8432628149414L 626.8965932607651 168.8432628149414Q 626.8965932607651 168.8432628149414 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414L 626.8965932607651 263.81759814834595L 626.8965932607651 263.81759814834595z"
                                    pathFrom="M 618.0044430017472 263.81759814834595L 618.0044430017472 263.81759814834595L 626.8965932607651 263.81759814834595L 626.8965932607651 263.81759814834595L 626.8965932607651 263.81759814834595L 626.8965932607651 263.81759814834595L 626.8965932607651 263.81759814834595L 618.0044430017472 263.81759814834595"
                                    cy="168.8432628149414"
                                    cx="677.2854447285334"
                                    j="10"
                                    val="36"
                                    barHeight="94.97433533340454"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1925"
                                    d="M 677.2854447285334 263.81759814834595L 677.2854447285334 137.18515103713992Q 677.2854447285334 137.18515103713992 677.2854447285334 137.18515103713992L 686.1775949875514 137.18515103713992Q 686.1775949875514 137.18515103713992 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992L 686.1775949875514 263.81759814834595L 686.1775949875514 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 677.2854447285334 263.81759814834595L 677.2854447285334 137.18515103713992Q 677.2854447285334 137.18515103713992 677.2854447285334 137.18515103713992L 686.1775949875514 137.18515103713992Q 686.1775949875514 137.18515103713992 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992L 686.1775949875514 263.81759814834595L 686.1775949875514 263.81759814834595z"
                                    pathFrom="M 677.2854447285334 263.81759814834595L 677.2854447285334 263.81759814834595L 686.1775949875514 263.81759814834595L 686.1775949875514 263.81759814834595L 686.1775949875514 263.81759814834595L 686.1775949875514 263.81759814834595L 686.1775949875514 263.81759814834595L 677.2854447285334 263.81759814834595"
                                    cy="137.18515103713992"
                                    cx="736.5664464553197"
                                    j="11"
                                    val="48"
                                    barHeight="126.63244711120605"
                                    barWidth="8.892150259017944"
                                  ></path>
                                </g>
                                <g
                                  id="SvgjsG1926"
                                  className="apexcharts-series"
                                  seriesName="SeriesxB"
                                  rel="2"
                                  dataRealIndex="1"
                                >
                                  <path
                                    id="SvgjsPath1928"
                                    d="M 25.194425733884174 147.73785496307374L 25.194425733884174 113.44156720378876Q 25.194425733884174 113.44156720378876 25.194425733884174 113.44156720378876L 34.08657599290212 113.44156720378876Q 34.08657599290212 113.44156720378876 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876L 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 25.194425733884174 147.73785496307374L 25.194425733884174 113.44156720378876Q 25.194425733884174 113.44156720378876 25.194425733884174 113.44156720378876L 34.08657599290212 113.44156720378876Q 34.08657599290212 113.44156720378876 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876L 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374z"
                                    pathFrom="M 25.194425733884174 147.73785496307374L 25.194425733884174 147.73785496307374L 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374L 25.194425733884174 147.73785496307374"
                                    cy="113.44156720378876"
                                    cx="84.47542746067046"
                                    j="0"
                                    val="13"
                                    barHeight="34.29628775928497"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1929"
                                    d="M 84.47542746067046 118.71791916675568L 84.47542746067046 58.03987159263611Q 84.47542746067046 58.03987159263611 84.47542746067046 58.03987159263611L 93.3675777196884 58.03987159263611Q 93.3675777196884 58.03987159263611 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611L 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 84.47542746067046 118.71791916675568L 84.47542746067046 58.03987159263611Q 84.47542746067046 58.03987159263611 84.47542746067046 58.03987159263611L 93.3675777196884 58.03987159263611Q 93.3675777196884 58.03987159263611 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611L 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568z"
                                    pathFrom="M 84.47542746067046 118.71791916675568L 84.47542746067046 118.71791916675568L 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568L 84.47542746067046 118.71791916675568"
                                    cy="58.03987159263611"
                                    cx="143.75642918745675"
                                    j="1"
                                    val="23"
                                    barHeight="60.67804757411957"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1930"
                                    d="M 143.75642918745675 155.6523829075241L 143.75642918745675 102.88886327785491Q 143.75642918745675 102.88886327785491 143.75642918745675 102.88886327785491L 152.64857944647468 102.88886327785491Q 152.64857944647468 102.88886327785491 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491L 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 143.75642918745675 155.6523829075241L 143.75642918745675 102.88886327785491Q 143.75642918745675 102.88886327785491 143.75642918745675 102.88886327785491L 152.64857944647468 102.88886327785491Q 152.64857944647468 102.88886327785491 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491L 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241z"
                                    pathFrom="M 143.75642918745675 155.6523829075241L 143.75642918745675 155.6523829075241L 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241L 143.75642918745675 155.6523829075241"
                                    cy="102.88886327785491"
                                    cx="203.03743091424303"
                                    j="2"
                                    val="20"
                                    barHeight="52.76351962966919"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1931"
                                    d="M 203.03743091424303 87.05980738895417L 203.03743091424303 65.95439953708649Q 203.03743091424303 65.95439953708649 203.03743091424303 65.95439953708649L 211.92958117326097 65.95439953708649Q 211.92958117326097 65.95439953708649 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649L 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 203.03743091424303 87.05980738895417L 203.03743091424303 65.95439953708649Q 203.03743091424303 65.95439953708649 203.03743091424303 65.95439953708649L 211.92958117326097 65.95439953708649Q 211.92958117326097 65.95439953708649 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649L 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417z"
                                    pathFrom="M 203.03743091424303 87.05980738895417L 203.03743091424303 87.05980738895417L 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417L 203.03743091424303 87.05980738895417"
                                    cy="65.95439953708649"
                                    cx="262.31843264102935"
                                    j="3"
                                    val="8"
                                    barHeight="21.105407851867675"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1932"
                                    d="M 262.31843264102935 205.77772655570985L 262.31843264102935 171.48143879642487Q 262.31843264102935 171.48143879642487 262.31843264102935 171.48143879642487L 271.2105829000473 171.48143879642487Q 271.2105829000473 171.48143879642487 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487L 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 262.31843264102935 205.77772655570985L 262.31843264102935 171.48143879642487Q 262.31843264102935 171.48143879642487 262.31843264102935 171.48143879642487L 271.2105829000473 171.48143879642487Q 271.2105829000473 171.48143879642487 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487L 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985z"
                                    pathFrom="M 262.31843264102935 205.77772655570985L 262.31843264102935 205.77772655570985L 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985L 262.31843264102935 205.77772655570985"
                                    cy="171.48143879642487"
                                    cx="321.59943436781566"
                                    j="4"
                                    val="13"
                                    barHeight="34.29628775928497"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1933"
                                    d="M 321.59943436781566 150.37603094455721L 321.59943436781566 79.14527944450381Q 321.59943436781566 79.14527944450381 321.59943436781566 79.14527944450381L 330.4915846268336 79.14527944450381Q 330.4915846268336 79.14527944450381 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381L 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 321.59943436781566 150.37603094455721L 321.59943436781566 79.14527944450381Q 321.59943436781566 79.14527944450381 321.59943436781566 79.14527944450381L 330.4915846268336 79.14527944450381Q 330.4915846268336 79.14527944450381 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381L 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721z"
                                    pathFrom="M 321.59943436781566 150.37603094455721L 321.59943436781566 150.37603094455721L 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721L 321.59943436781566 150.37603094455721"
                                    cy="79.14527944450381"
                                    cx="380.880436094602"
                                    j="5"
                                    val="27"
                                    barHeight="71.2307515000534"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1934"
                                    d="M 380.880436094602 168.8432628149414L 380.880436094602 121.35609514823912Q 380.880436094602 121.35609514823912 380.880436094602 121.35609514823912L 389.77258635361994 121.35609514823912Q 389.77258635361994 121.35609514823912 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912L 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 380.880436094602 168.8432628149414L 380.880436094602 121.35609514823912Q 380.880436094602 121.35609514823912 380.880436094602 121.35609514823912L 389.77258635361994 121.35609514823912Q 389.77258635361994 121.35609514823912 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912L 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414z"
                                    pathFrom="M 380.880436094602 168.8432628149414L 380.880436094602 168.8432628149414L 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414L 380.880436094602 168.8432628149414"
                                    cy="121.35609514823912"
                                    cx="440.1614378213883"
                                    j="6"
                                    val="18"
                                    barHeight="47.48716766670227"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1935"
                                    d="M 440.1614378213883 126.63244711120606L 440.1614378213883 68.59257551856996Q 440.1614378213883 68.59257551856996 440.1614378213883 68.59257551856996L 449.05358808040626 68.59257551856996Q 449.05358808040626 68.59257551856996 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996L 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 440.1614378213883 126.63244711120606L 440.1614378213883 68.59257551856996Q 440.1614378213883 68.59257551856996 440.1614378213883 68.59257551856996L 449.05358808040626 68.59257551856996Q 449.05358808040626 68.59257551856996 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996L 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606z"
                                    pathFrom="M 440.1614378213883 126.63244711120606L 440.1614378213883 126.63244711120606L 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606L 440.1614378213883 126.63244711120606"
                                    cy="68.59257551856996"
                                    cx="499.4424395481746"
                                    j="7"
                                    val="22"
                                    barHeight="58.03987159263611"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1936"
                                    d="M 499.4424395481746 200.50137459274293L 499.4424395481746 174.11961477790834Q 499.4424395481746 174.11961477790834 499.4424395481746 174.11961477790834L 508.3345898071926 174.11961477790834Q 508.3345898071926 174.11961477790834 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834L 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 499.4424395481746 200.50137459274293L 499.4424395481746 174.11961477790834Q 499.4424395481746 174.11961477790834 499.4424395481746 174.11961477790834L 508.3345898071926 174.11961477790834Q 508.3345898071926 174.11961477790834 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834L 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293z"
                                    pathFrom="M 499.4424395481746 200.50137459274293L 499.4424395481746 200.50137459274293L 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293L 499.4424395481746 200.50137459274293"
                                    cy="174.11961477790834"
                                    cx="558.7234412749609"
                                    j="8"
                                    val="10"
                                    barHeight="26.381759814834595"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1937"
                                    d="M 558.7234412749609 216.33043048164367L 558.7234412749609 174.11961477790834Q 558.7234412749609 174.11961477790834 558.7234412749609 174.11961477790834L 567.6155915339789 174.11961477790834Q 567.6155915339789 174.11961477790834 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834L 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 558.7234412749609 216.33043048164367L 558.7234412749609 174.11961477790834Q 558.7234412749609 174.11961477790834 558.7234412749609 174.11961477790834L 567.6155915339789 174.11961477790834Q 567.6155915339789 174.11961477790834 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834L 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367z"
                                    pathFrom="M 558.7234412749609 216.33043048164367L 558.7234412749609 216.33043048164367L 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367L 558.7234412749609 216.33043048164367"
                                    cy="174.11961477790834"
                                    cx="618.0044430017472"
                                    j="9"
                                    val="16"
                                    barHeight="42.21081570373535"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1938"
                                    d="M 618.0044430017472 168.8432628149414L 618.0044430017472 105.52703925933838Q 618.0044430017472 105.52703925933838 618.0044430017472 105.52703925933838L 626.8965932607651 105.52703925933838Q 626.8965932607651 105.52703925933838 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838L 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 618.0044430017472 168.8432628149414L 618.0044430017472 105.52703925933838Q 618.0044430017472 105.52703925933838 618.0044430017472 105.52703925933838L 626.8965932607651 105.52703925933838Q 626.8965932607651 105.52703925933838 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838L 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414z"
                                    pathFrom="M 618.0044430017472 168.8432628149414L 618.0044430017472 168.8432628149414L 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414L 618.0044430017472 168.8432628149414"
                                    cy="105.52703925933838"
                                    cx="677.2854447285334"
                                    j="10"
                                    val="24"
                                    barHeight="63.316223555603024"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1939"
                                    d="M 677.2854447285334 137.18515103713992L 677.2854447285334 79.14527944450381Q 677.2854447285334 79.14527944450381 677.2854447285334 79.14527944450381L 686.1775949875514 79.14527944450381Q 686.1775949875514 79.14527944450381 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381L 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 677.2854447285334 137.18515103713992L 677.2854447285334 79.14527944450381Q 677.2854447285334 79.14527944450381 677.2854447285334 79.14527944450381L 686.1775949875514 79.14527944450381Q 686.1775949875514 79.14527944450381 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381L 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992z"
                                    pathFrom="M 677.2854447285334 137.18515103713992L 677.2854447285334 137.18515103713992L 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992L 677.2854447285334 137.18515103713992"
                                    cy="79.14527944450381"
                                    cx="736.5664464553197"
                                    j="11"
                                    val="22"
                                    barHeight="58.03987159263611"
                                    barWidth="8.892150259017944"
                                  ></path>
                                </g>
                                <g
                                  id="SvgjsG1940"
                                  className="apexcharts-series"
                                  seriesName="SeriesxC"
                                  rel="3"
                                  dataRealIndex="2"
                                >
                                  <path
                                    id="SvgjsPath1942"
                                    d="M 25.194425733884174 113.44156720378876L 25.194425733884174 84.42163140747071Q 25.194425733884174 84.42163140747071 25.194425733884174 84.42163140747071L 34.08657599290212 84.42163140747071Q 34.08657599290212 84.42163140747071 34.08657599290212 84.42163140747071L 34.08657599290212 84.42163140747071L 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 25.194425733884174 113.44156720378876L 25.194425733884174 84.42163140747071Q 25.194425733884174 84.42163140747071 25.194425733884174 84.42163140747071L 34.08657599290212 84.42163140747071Q 34.08657599290212 84.42163140747071 34.08657599290212 84.42163140747071L 34.08657599290212 84.42163140747071L 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876z"
                                    pathFrom="M 25.194425733884174 113.44156720378876L 25.194425733884174 113.44156720378876L 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876L 25.194425733884174 113.44156720378876"
                                    cy="84.42163140747071"
                                    cx="84.47542746067046"
                                    j="0"
                                    val="11"
                                    barHeight="29.019935796318055"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1943"
                                    d="M 84.47542746067046 58.03987159263611L 84.47542746067046 13.190879907417298Q 84.47542746067046 13.190879907417298 84.47542746067046 13.190879907417298L 93.3675777196884 13.190879907417298Q 93.3675777196884 13.190879907417298 93.3675777196884 13.190879907417298L 93.3675777196884 13.190879907417298L 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 84.47542746067046 58.03987159263611L 84.47542746067046 13.190879907417298Q 84.47542746067046 13.190879907417298 84.47542746067046 13.190879907417298L 93.3675777196884 13.190879907417298Q 93.3675777196884 13.190879907417298 93.3675777196884 13.190879907417298L 93.3675777196884 13.190879907417298L 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611z"
                                    pathFrom="M 84.47542746067046 58.03987159263611L 84.47542746067046 58.03987159263611L 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611L 84.47542746067046 58.03987159263611"
                                    cy="13.190879907417298"
                                    cx="143.75642918745675"
                                    j="1"
                                    val="17"
                                    barHeight="44.84899168521881"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1944"
                                    d="M 143.75642918745675 102.88886327785491L 143.75642918745675 63.31622355560302Q 143.75642918745675 63.31622355560302 143.75642918745675 63.31622355560302L 152.64857944647468 63.31622355560302Q 152.64857944647468 63.31622355560302 152.64857944647468 63.31622355560302L 152.64857944647468 63.31622355560302L 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 143.75642918745675 102.88886327785491L 143.75642918745675 63.31622355560302Q 143.75642918745675 63.31622355560302 143.75642918745675 63.31622355560302L 152.64857944647468 63.31622355560302Q 152.64857944647468 63.31622355560302 152.64857944647468 63.31622355560302L 152.64857944647468 63.31622355560302L 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491z"
                                    pathFrom="M 143.75642918745675 102.88886327785491L 143.75642918745675 102.88886327785491L 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491L 143.75642918745675 102.88886327785491"
                                    cy="63.31622355560302"
                                    cx="203.03743091424303"
                                    j="2"
                                    val="15"
                                    barHeight="39.57263972225189"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1945"
                                    d="M 203.03743091424303 65.95439953708649L 203.03743091424303 26.381759814834595Q 203.03743091424303 26.381759814834595 203.03743091424303 26.381759814834595L 211.92958117326097 26.381759814834595Q 211.92958117326097 26.381759814834595 211.92958117326097 26.381759814834595L 211.92958117326097 26.381759814834595L 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 203.03743091424303 65.95439953708649L 203.03743091424303 26.381759814834595Q 203.03743091424303 26.381759814834595 203.03743091424303 26.381759814834595L 211.92958117326097 26.381759814834595Q 211.92958117326097 26.381759814834595 211.92958117326097 26.381759814834595L 211.92958117326097 26.381759814834595L 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649z"
                                    pathFrom="M 203.03743091424303 65.95439953708649L 203.03743091424303 65.95439953708649L 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649L 203.03743091424303 65.95439953708649"
                                    cy="26.381759814834595"
                                    cx="262.31843264102935"
                                    j="3"
                                    val="15"
                                    barHeight="39.57263972225189"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1946"
                                    d="M 262.31843264102935 171.48143879642487L 262.31843264102935 116.07974318527222Q 262.31843264102935 116.07974318527222 262.31843264102935 116.07974318527222L 271.2105829000473 116.07974318527222Q 271.2105829000473 116.07974318527222 271.2105829000473 116.07974318527222L 271.2105829000473 116.07974318527222L 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 262.31843264102935 171.48143879642487L 262.31843264102935 116.07974318527222Q 262.31843264102935 116.07974318527222 262.31843264102935 116.07974318527222L 271.2105829000473 116.07974318527222Q 271.2105829000473 116.07974318527222 271.2105829000473 116.07974318527222L 271.2105829000473 116.07974318527222L 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487z"
                                    pathFrom="M 262.31843264102935 171.48143879642487L 262.31843264102935 171.48143879642487L 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487L 262.31843264102935 171.48143879642487"
                                    cy="116.07974318527222"
                                    cx="321.59943436781566"
                                    j="4"
                                    val="21"
                                    barHeight="55.40169561115265"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1947"
                                    d="M 321.59943436781566 79.14527944450381L 321.59943436781566 42.210815703735385Q 321.59943436781566 42.210815703735385 321.59943436781566 42.210815703735385L 330.4915846268336 42.210815703735385Q 330.4915846268336 42.210815703735385 330.4915846268336 42.210815703735385L 330.4915846268336 42.210815703735385L 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 321.59943436781566 79.14527944450381L 321.59943436781566 42.210815703735385Q 321.59943436781566 42.210815703735385 321.59943436781566 42.210815703735385L 330.4915846268336 42.210815703735385Q 330.4915846268336 42.210815703735385 330.4915846268336 42.210815703735385L 330.4915846268336 42.210815703735385L 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381z"
                                    pathFrom="M 321.59943436781566 79.14527944450381L 321.59943436781566 79.14527944450381L 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381L 321.59943436781566 79.14527944450381"
                                    cy="42.210815703735385"
                                    cx="380.880436094602"
                                    j="5"
                                    val="14"
                                    barHeight="36.93446374076843"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1948"
                                    d="M 380.880436094602 121.35609514823912L 380.880436094602 92.33615935192107Q 380.880436094602 92.33615935192107 380.880436094602 92.33615935192107L 389.77258635361994 92.33615935192107Q 389.77258635361994 92.33615935192107 389.77258635361994 92.33615935192107L 389.77258635361994 92.33615935192107L 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 380.880436094602 121.35609514823912L 380.880436094602 92.33615935192107Q 380.880436094602 92.33615935192107 380.880436094602 92.33615935192107L 389.77258635361994 92.33615935192107Q 389.77258635361994 92.33615935192107 389.77258635361994 92.33615935192107L 389.77258635361994 92.33615935192107L 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912z"
                                    pathFrom="M 380.880436094602 121.35609514823912L 380.880436094602 121.35609514823912L 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912L 380.880436094602 121.35609514823912"
                                    cy="92.33615935192107"
                                    cx="440.1614378213883"
                                    j="6"
                                    val="11"
                                    barHeight="29.019935796318055"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1949"
                                    d="M 440.1614378213883 68.59257551856996L 440.1614378213883 21.10540785186769Q 440.1614378213883 21.10540785186769 440.1614378213883 21.10540785186769L 449.05358808040626 21.10540785186769Q 449.05358808040626 21.10540785186769 449.05358808040626 21.10540785186769L 449.05358808040626 21.10540785186769L 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 440.1614378213883 68.59257551856996L 440.1614378213883 21.10540785186769Q 440.1614378213883 21.10540785186769 440.1614378213883 21.10540785186769L 449.05358808040626 21.10540785186769Q 449.05358808040626 21.10540785186769 449.05358808040626 21.10540785186769L 449.05358808040626 21.10540785186769L 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996z"
                                    pathFrom="M 440.1614378213883 68.59257551856996L 440.1614378213883 68.59257551856996L 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996L 440.1614378213883 68.59257551856996"
                                    cy="21.10540785186769"
                                    cx="499.4424395481746"
                                    j="7"
                                    val="18"
                                    barHeight="47.48716766670227"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1950"
                                    d="M 499.4424395481746 174.11961477790834L 499.4424395481746 129.27062309268953Q 499.4424395481746 129.27062309268953 499.4424395481746 129.27062309268953L 508.3345898071926 129.27062309268953Q 508.3345898071926 129.27062309268953 508.3345898071926 129.27062309268953L 508.3345898071926 129.27062309268953L 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 499.4424395481746 174.11961477790834L 499.4424395481746 129.27062309268953Q 499.4424395481746 129.27062309268953 499.4424395481746 129.27062309268953L 508.3345898071926 129.27062309268953Q 508.3345898071926 129.27062309268953 508.3345898071926 129.27062309268953L 508.3345898071926 129.27062309268953L 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834z"
                                    pathFrom="M 499.4424395481746 174.11961477790834L 499.4424395481746 174.11961477790834L 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834L 499.4424395481746 174.11961477790834"
                                    cy="129.27062309268953"
                                    cx="558.7234412749609"
                                    j="8"
                                    val="17"
                                    barHeight="44.84899168521881"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1951"
                                    d="M 558.7234412749609 174.11961477790834L 558.7234412749609 142.46150300010683Q 558.7234412749609 142.46150300010683 558.7234412749609 142.46150300010683L 567.6155915339789 142.46150300010683Q 567.6155915339789 142.46150300010683 567.6155915339789 142.46150300010683L 567.6155915339789 142.46150300010683L 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 558.7234412749609 174.11961477790834L 558.7234412749609 142.46150300010683Q 558.7234412749609 142.46150300010683 558.7234412749609 142.46150300010683L 567.6155915339789 142.46150300010683Q 567.6155915339789 142.46150300010683 567.6155915339789 142.46150300010683L 567.6155915339789 142.46150300010683L 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834z"
                                    pathFrom="M 558.7234412749609 174.11961477790834L 558.7234412749609 174.11961477790834L 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834L 558.7234412749609 174.11961477790834"
                                    cy="142.46150300010683"
                                    cx="618.0044430017472"
                                    j="9"
                                    val="12"
                                    barHeight="31.658111777801512"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1952"
                                    d="M 618.0044430017472 105.52703925933838L 618.0044430017472 52.76351962966919Q 618.0044430017472 52.76351962966919 618.0044430017472 52.76351962966919L 626.8965932607651 52.76351962966919Q 626.8965932607651 52.76351962966919 626.8965932607651 52.76351962966919L 626.8965932607651 52.76351962966919L 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 618.0044430017472 105.52703925933838L 618.0044430017472 52.76351962966919Q 618.0044430017472 52.76351962966919 618.0044430017472 52.76351962966919L 626.8965932607651 52.76351962966919Q 626.8965932607651 52.76351962966919 626.8965932607651 52.76351962966919L 626.8965932607651 52.76351962966919L 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838z"
                                    pathFrom="M 618.0044430017472 105.52703925933838L 618.0044430017472 105.52703925933838L 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838L 618.0044430017472 105.52703925933838"
                                    cy="52.76351962966919"
                                    cx="677.2854447285334"
                                    j="10"
                                    val="20"
                                    barHeight="52.76351962966919"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1953"
                                    d="M 677.2854447285334 79.14527944450381L 677.2854447285334 31.658111777801544Q 677.2854447285334 31.658111777801544 677.2854447285334 31.658111777801544L 686.1775949875514 31.658111777801544Q 686.1775949875514 31.658111777801544 686.1775949875514 31.658111777801544L 686.1775949875514 31.658111777801544L 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 677.2854447285334 79.14527944450381L 677.2854447285334 31.658111777801544Q 677.2854447285334 31.658111777801544 677.2854447285334 31.658111777801544L 686.1775949875514 31.658111777801544Q 686.1775949875514 31.658111777801544 686.1775949875514 31.658111777801544L 686.1775949875514 31.658111777801544L 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381z"
                                    pathFrom="M 677.2854447285334 79.14527944450381L 677.2854447285334 79.14527944450381L 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381L 677.2854447285334 79.14527944450381"
                                    cy="31.658111777801544"
                                    cx="736.5664464553197"
                                    j="11"
                                    val="18"
                                    barHeight="47.48716766670227"
                                    barWidth="8.892150259017944"
                                  ></path>
                                </g>
                                <g
                                  id="SvgjsG1913"
                                  className="apexcharts-datalabels"
                                  dataRealIndex="0"
                                ></g>
                                <g
                                  id="SvgjsG1927"
                                  className="apexcharts-datalabels"
                                  dataRealIndex="1"
                                ></g>
                                <g
                                  id="SvgjsG1941"
                                  className="apexcharts-datalabels"
                                  dataRealIndex="2"
                                ></g>
                              </g>
                              <line
                                id="SvgjsLine2031"
                                x1="0"
                                y1="0"
                                x2="711.3720207214355"
                                y2="0"
                                stroke="#b6b6b6"
                                strokeDasharray="0"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                              ></line>
                              <line
                                id="SvgjsLine2032"
                                x1="0"
                                y1="0"
                                x2="711.3720207214355"
                                y2="0"
                                strokeDasharray="0"
                                strokeWidth="0"
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                              ></line>
                              <g
                                id="SvgjsG2033"
                                className="apexcharts-yaxis-annotations"
                              ></g>
                              <g
                                id="SvgjsG2034"
                                className="apexcharts-xaxis-annotations"
                              ></g>
                              <g
                                id="SvgjsG2035"
                                className="apexcharts-point-annotations"
                              ></g>
                            </g>
                            <g
                              id="SvgjsG1993"
                              className="apexcharts-yaxis"
                              rel="0"
                              transform="translate(14.627979278564453, 0)"
                            >
                              <g
                                id="SvgjsG1994"
                                className="apexcharts-yaxis-texts-g"
                              >
                                <text
                                  id="SvgjsText1995"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="20"
                                  y="31.5"
                                  text-anchor="end"
                                  dominant-baseline="auto"
                                  font-size="11px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                >
                                  <tspan id="SvgjsTspan1996">100</tspan>
                                  <title>100</title>
                                </text>
                                <text
                                  id="SvgjsText1997"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="20"
                                  y="84.26351962966919"
                                  text-anchor="end"
                                  dominant-baseline="auto"
                                  font-size="11px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                >
                                  <tspan id="SvgjsTspan1998">80</tspan>
                                  <title>80</title>
                                </text>
                                <text
                                  id="SvgjsText1999"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="20"
                                  y="137.02703925933838"
                                  text-anchor="end"
                                  dominant-baseline="auto"
                                  font-size="11px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                >
                                  <tspan id="SvgjsTspan2000">60</tspan>
                                  <title>60</title>
                                </text>
                                <text
                                  id="SvgjsText2001"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="20"
                                  y="189.79055888900757"
                                  text-anchor="end"
                                  dominant-baseline="auto"
                                  font-size="11px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                >
                                  <tspan id="SvgjsTspan2002">40</tspan>
                                  <title>40</title>
                                </text>
                                <text
                                  id="SvgjsText2003"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="20"
                                  y="242.55407851867676"
                                  text-anchor="end"
                                  dominant-baseline="auto"
                                  font-size="11px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                >
                                  <tspan id="SvgjsTspan2004">20</tspan>
                                  <title>20</title>
                                </text>
                                <text
                                  id="SvgjsText2005"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="20"
                                  y="295.31759814834595"
                                  text-anchor="end"
                                  dominant-baseline="auto"
                                  font-size="11px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                >
                                  <tspan id="SvgjsTspan2006">0</tspan>
                                  <title>0</title>
                                </text>
                              </g>
                            </g>
                            <g
                              id="SvgjsG1901"
                              className="apexcharts-annotations"
                            ></g>
                          </svg>
                          <div className="apexcharts-tooltip apexcharts-theme-light">
                            <div
                              className="apexcharts-tooltip-title"
                              style={{fontFamily:" Helvetica, Arial, sans-serif", fontSize: "12px"}}
                            ></div>
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{order: "1"}}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{backgroundColor: "rgb(85, 110, 230)"}}
                              ></span>
                              <div
                                className="apexcharts-tooltip-text"
                                style={{fontFamily:" Helvetica, Arial, sans-serif", fontSize: "12px"}}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label"></span>
                                  <span className="apexcharts-tooltip-text-y-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label"></span>
                                  <span className="apexcharts-tooltip-text-goals-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label"></span>
                                  <span className="apexcharts-tooltip-text-z-value"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{order: "2"}}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{backgroundColor: "rgb(241, 180, 76)"}}
                              ></span>
                              <div
                                className="apexcharts-tooltip-text"
                                style={{fontFamily:" Helvetica, Arial, sans-serif", fontSize: "12px"}}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label"></span>
                                  <span className="apexcharts-tooltip-text-y-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label"></span>
                                  <span className="apexcharts-tooltip-text-goals-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label"></span>
                                  <span className="apexcharts-tooltip-text-z-value"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{order: "3"}}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{backgroundColor: "rgb(52, 195, 143)"}}
                              ></span>
                              <div
                                className="apexcharts-tooltip-text"
                                style={{fontFamily: "Helvetica, Arial, sans-serif", fontSize: "12px"}}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label"></span>
                                  <span className="apexcharts-tooltip-text-y-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label"></span>
                                  <span className="apexcharts-tooltip-text-goals-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label"></span>
                                  <span className="apexcharts-tooltip-text-z-value"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                            <div className="apexcharts-yaxistooltip-text"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
            </div>

            {/* <div className="row">
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-4 h4 card-title">Social Source</div>
                    <div className="text-center">
                      <div className="avatar-sm mx-auto mb-4">
                        <span className="avatar-title rounded-circle bg-primary bg-soft font-size-24">
                          <i className="mdi mdi-facebook text-primary"></i>
                        </span>
                      </div>
                      <p className="font-16 text-muted mb-2"></p>
                      <h5>
                        <a className="text-dark" href="/dashboard">
                          Facebook -{" "}
                          <span className="text-muted font-16">125 sales</span>{" "}
                        </a>
                      </h5>
                      <p className="text-muted">
                        Maecenas nec odio et ante tincidunt tempus. Donec vitae
                        sapien ut libero venenatis faucibus tincidunt.
                      </p>
                      <a className="text-primary font-16" href="/dashboard">
                        Learn more <i className="mdi mdi-chevron-right"></i>
                      </a>
                    </div>
                    <div className="mt-4 row">
                      <div className="col-4">
                        <div className="social-source text-center mt-3">
                          <div className="avatar-xs mx-auto mb-3">
                            <span className="avatar-title rounded-circle bg-primary font-size-16">
                              <i className="mdi mdi-facebook text-white"></i>
                            </span>
                          </div>
                          <h5 className="font-size-15">Facebook</h5>
                          <p className="text-muted mb-0">125 sales</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="social-source text-center mt-3">
                          <div className="avatar-xs mx-auto mb-3">
                            <span className="avatar-title rounded-circle bg-info font-size-16">
                              <i className="mdi mdi-twitter text-white"></i>
                            </span>
                          </div>
                          <h5 className="font-size-15">Twitter</h5>
                          <p className="text-muted mb-0">112 sales</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="social-source text-center mt-3">
                          <div className="avatar-xs mx-auto mb-3">
                            <span className="avatar-title rounded-circle bg-pink font-size-16">
                              <i className="mdi mdi-instagram text-white"></i>
                            </span>
                          </div>
                          <h5 className="font-size-15">Instagram</h5>
                          <p className="text-muted mb-0">104 sales</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-5 h4 card-title">Activity</div>
                    <ul className="verti-timeline list-unstyled">
                      <li className="event-list">
                        <div className="event-timeline-dot">
                          <i className="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <h5 className="font-size-14">
                              22 Nov{" "}
                              <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                            </h5>
                          </div>
                          <div className="flex-grow-1">
                            <div>Responded to need “Volunteer Activities</div>
                          </div>
                        </div>
                      </li>
                      <li className="event-list">
                        <div className="event-timeline-dot">
                          <i className="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <h5 className="font-size-14">
                              17 Nov{" "}
                              <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                            </h5>
                          </div>
                          <div className="flex-grow-1">
                            <div id="activitytext">
                              Everyone realizes why a new common language would
                              be desirable... <a href="/dashboard">Read more</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="event-list active">
                        <div className="event-timeline-dot">
                          <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                        </div>
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <h5 className="font-size-14">
                              15 Nov{" "}
                              <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                            </h5>
                          </div>
                          <div className="flex-grow-1">
                            <div>Joined the group “Boardsmanship Forum”</div>
                          </div>
                        </div>
                      </li>
                      <li className="event-list">
                        <div className="event-timeline-dot">
                          <i className="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <h5 className="font-size-14">
                              12 Nov{" "}
                              <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                            </h5>
                          </div>
                          <div className="flex-grow-1">
                            <div>Responded to need “In-Kind Opportunity”</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="text-center mt-4">
                      <a className="btn btn-primary btn-sm" href="/">
                        View More <i className="mdi mdi-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-4 h4 card-title">
                      Top Cities Selling Product
                    </div>
                    <div className="text-center">
                      <div className="mb-4">
                        <i
                          className="bx bx-map-pin text-primary display-4"
                          style={{ lineHeight: "1" }}
                        ></i>
                      </div>
                      <h3>1,456</h3>
                      <p>San Francisco</p>
                    </div>
                    <div className="table-responsive mt-4">
                      <table className="table align-middle table-nowrap">
                        <tbody>
                          <tr>
                            <td style={{ width: "30%" }}>
                              <p className="mb-0">San Francisco</p>
                            </td>
                            <td style={{ width: "25%" }}>
                              <h5 className="mb-0">1,456</h5>
                            </td>
                            <td>
                              <div className="progress bg-transparent progress-sm progress">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  aria-valuenow="94"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "94%" }}
                                ></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="mb-0">Los Angeles</p>
                            </td>
                            <td>
                              <h5 className="mb-0">1,123</h5>
                            </td>
                            <td>
                              <div className="progress bg-transparent progress-sm progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  aria-valuenow="82"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "82%" }}
                                ></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="mb-0">San Diego</p>
                            </td>
                            <td>
                              <h5 className="mb-0">1,026</h5>
                            </td>
                            <td>
                              <div className="progress bg-transparent progress-sm progress">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  aria-valuenow="70"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "70%" }}
                                ></div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
