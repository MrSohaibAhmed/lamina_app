import { createChart } from 'lightweight-charts';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
const TradingViewWidget = ({ data, token }) => {
  const [candlesData, setCandlesData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        headers: { 'X-API-KEY': '1a6f67ecb3d540b984f8fc694cfb364c' }
      };
      const oneWeekAgoEpoch = Math.floor((Date.now() - (7 * 24 * 60 * 60 * 1000)) / 1000);
      const currentEpoch = Math.floor(Date.now() / 1000);
      try {
        const response = await axios.get(`https://public-api.birdeye.so/defi/ohlcv?address=${token}&type=15m&time_from=${oneWeekAgoEpoch}&time_to=${currentEpoch}`, options);
        console.log(response.data);
        debugger
        setCandlesData(response.data?.data?.items || []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const chartContainerRef = useRef();
  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: "#161A25" },
        textColor: "#C3BCDB",
      },
      grid: {
        vertLines: { color: "#242733" },
        horzLines: { color: "#242733" },
      },
      width: chartContainerRef.current.clientWidth,
      height: 500,
    });
    chart.timeScale().fitContent();
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#26A69A',
      downColor: '#EF5350',
      borderVisible: false,
      wickUpColor: '#26A69A',
      wickDownColor: '#EF5350',
    });
    candlestickSeries.applyOptions({
      priceFormat: {
        precision: 5,
        minMove: 0.001
      }
    })
    candlestickSeries.priceScale().applyOptions({
      autoScale: false,
      mode: 1,
      // scaleMargins: {
      //   top: 0.1,
      //   bottom: 0.2,
      // },
    });
    candlestickSeries.setData(candlesData.map(item => ({
      time: item.unixTime, // Convert Unix time to milliseconds
      open: parseFloat(item.o),
      high: parseFloat(item.h),
      low: parseFloat(item.l),
      close: parseFloat(item.c),
    })));
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [candlesData]);
  return (
    <div ref={chartContainerRef} />
  );
};
export default TradingViewWidget;