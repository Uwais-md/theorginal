"use client"
import React, { Component } from 'react';
import { GridGenerator, HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid';
import './App.css';
import Java from '../../components/Stack/assets/mariadb.svg'


export default function Test() {
    const hexagonSize = { x: 10, y: 10 };
    const moreHexas = GridGenerator.parallelogram(-2, 2, -2, 2);
    return(
        <div className="App">
        <h2>React Hexgrid v1</h2>
        <p>Constructing Hexgrid with component-based approach with custom SVG elements.</p>
        <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
          <Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon q={0} r={0} s={0} />
            <Hexagon q={0} r={-1} s={1} fill="pat-1" />
            <Hexagon q={0} r={1} s={-1} />
            <Hexagon q={1} r={-1} s={0}>
              <Text>1, -1, 0</Text>
            </Hexagon>
            <Hexagon q={1} r={0} s={-1}>
              <Text>1, 0, -1</Text>
            </Hexagon>
            <Hexagon q={-1} r={1} s={0} fill="pat-2">
              <Text>-1, 1, 0</Text>
            </Hexagon>
            <Hexagon q={-1} r={0} s={1} />
            <Hexagon q={-2} r={0} s={1} />
            <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
          </Layout>
          <Layout size={{ x: 2, y: 2 }} origin={{ x: 50, y: -30 }}>
            { moreHexas.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>
          <Pattern id="pat-1" link='/assets/final-logo.svg' size={hexagonSize} />
          <Pattern id="pat-2" link={Java} size={hexagonSize} />
          <g>
            <circle cx="50" cy="0" r="10" />
            <circle cx="50" cy="10" r="8" />
            <circle cx="45" cy="20" r="6" />
          </g>
        </HexGrid>
      </div>
    )
}