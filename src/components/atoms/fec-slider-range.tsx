'use client';

import React, { useEffect, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';
import { useProductContext } from '@/hooks/useProductContext';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
`;

const SliderTrack = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 6px;
  width: 100%;
  background-color: #ddd;
  border-radius: 3px;
`;

// const SliderRange = styled.div<{ left: number; right: number }>`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   height: 6px;
//   background-color: #0070f3;
//   border-radius: 3px;
//   left: ${({ left }) => left}%;
//   right: ${({ right }) => right}%;
// `;

const ThumbInput = styled.input`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: none;
  pointer-events: none;
  appearance: none;

  &::-webkit-slider-thumb {
    pointer-events: all;
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: #0070f3;
    cursor: pointer;
    border: none;
    margin-top: -5px;
  }

  &::-moz-range-thumb {
    pointer-events: all;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: #0070f3;
    cursor: pointer;
    border: none;
  }
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #444;
`;

export default function FECSliderRange() {
  const { maxPrice } = useProductContext();
  const router = useRouter();
  const searchParams = useSearchParams();

  const rangePrice = searchParams.get('rangePrice');
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(maxPrice);

  useEffect(() => {
    const min = rangePrice ? Number(rangePrice.split(',')[0]) : 0;
    const max = rangePrice ? Number(rangePrice.split(',')[1]) : maxPrice;

    if (min !== minVal) setMinVal(min);
    if (max !== maxVal) setMaxVal(max);
  }, [maxPrice, rangePrice]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('rangePrice', `${minVal},${maxVal}`);
    router.replace(`?${params.toString()}`);
  }, [minVal, maxVal]);

  // const getPercent = (value: number) =>
  //   Math.round(((value - 0) / (maxPrice - 0)) * 100)

  return (
    <>
      <LabelRow>
        <span>{minVal} ₺</span>
        <span>{maxVal} ₺</span>
      </LabelRow>

      <SliderContainer>
        <SliderTrack />
        {/* <SliderRange
          left={getPercent(minVal)}
          right={100 - getPercent(maxVal)}
        /> */}

        {/* Sol thumb */}
        <ThumbInput
          type="range"
          min={0}
          max={maxPrice}
          value={minVal}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const val = Math.min(Number(e.target.value), maxVal - 1);
            setMinVal(val);
          }}
        />

        {/* Sağ thumb */}
        <ThumbInput
          type="range"
          min={0}
          max={maxPrice}
          value={maxVal}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const val = Math.max(Number(e.target.value), minVal + 1);
            setMaxVal(val);
          }}
        />
      </SliderContainer>
    </>
  );
}
