/* eslint-disable max-len */
import React from "react";
import { vec, Group, LinearGradient, Path } from "@shopify/react-native-skia";

import type { StickerProps } from "./StickerComponent";

const size = { width: 162, height: 53 };

const Sticker = ({ matrix }: StickerProps) => {
  return (
    <Group matrix={matrix}>
      <Path
        path="M6.36769 0.183105C2.9101 0.183105 0.0800171 3.9931 0.0800171 8.64911V43.9251C0.0800171 48.5811 2.9101 52.3911 6.36769 52.3911H155.713C159.171 52.3911 162 48.5811 162 43.9251V8.64911C162 3.9931 159.171 0.183105 155.713 0.183105H6.36769Z"
        color="white"
      />
      <Group>
        <LinearGradient
          start={vec(60, 0)}
          end={vec(145, 0)}
          colors={["#41BBFF", "#50E644"]}
        />
        <Path path="M71.92 39.08C71.92 39.3467 71.8267 39.5733 71.64 39.76C71.48 39.92 71.2667 40 71 40H69.92C69.6533 40 69.4267 39.92 69.24 39.76C69.08 39.5733 69 39.3467 69 39.08V27.04H61.48V39.08C61.48 39.3467 61.3867 39.5733 61.2 39.76C61.04 39.92 60.8267 40 60.56 40H59.48C59.2133 40 58.9867 39.92 58.8 39.76C58.64 39.5733 58.56 39.3467 58.56 39.08V12.92C58.56 12.6533 58.64 12.44 58.8 12.28C58.9867 12.0933 59.2133 12 59.48 12H60.56C60.8267 12 61.04 12.0933 61.2 12.28C61.3867 12.44 61.48 12.6533 61.48 12.92V24.36H69V12.92C69 12.6533 69.08 12.44 69.24 12.28C69.4267 12.0933 69.6533 12 69.92 12H71C71.2667 12 71.48 12.0933 71.64 12.28C71.8267 12.44 71.92 12.6533 71.92 12.92V39.08Z" />
        <Path path="M85.9166 32.08H79.5966L78.3166 39.2C78.2366 39.7333 77.9299 40 77.3966 40H76.2366C75.9966 40 75.7966 39.9467 75.6366 39.84C75.4766 39.7333 75.3966 39.5467 75.3966 39.28C75.3966 39.1467 75.4366 38.8667 75.5166 38.44L80.4766 12.92C80.5299 12.6533 80.6366 12.44 80.7966 12.28C80.9566 12.0933 81.1699 12 81.4366 12H84.3166C84.5832 12 84.7966 12.0933 84.9566 12.28C85.1166 12.44 85.2232 12.6533 85.2766 12.92L90.1166 38.16C90.1699 38.3733 90.1966 38.5867 90.1966 38.8C90.2232 38.9867 90.2366 39.12 90.2366 39.2C90.2366 39.7333 89.9699 40 89.4366 40H88.1566C87.6232 40 87.3166 39.7333 87.2366 39.2L85.9166 32.08ZM80.0766 29.56H85.4766L82.7966 14.76L80.0766 29.56Z" />
        <Path path="M103.994 30.6C103.994 30.3333 104.088 30.12 104.274 29.96C104.461 29.7733 104.674 29.68 104.914 29.68H105.994C106.261 29.68 106.474 29.7733 106.634 29.96C106.821 30.12 106.914 30.3333 106.914 30.6V34.2C106.914 35.1333 106.754 35.96 106.434 36.68C106.141 37.4 105.728 38.0133 105.194 38.52C104.688 39 104.074 39.3733 103.354 39.64C102.634 39.88 101.861 40 101.034 40H99.4344C98.6077 40 97.8344 39.88 97.1144 39.64C96.3944 39.3733 95.7677 39 95.2344 38.52C94.7277 38.0133 94.3144 37.4 93.9944 36.68C93.701 35.96 93.5544 35.1333 93.5544 34.2V17.8C93.5544 16.8667 93.701 16.04 93.9944 15.32C94.3144 14.6 94.7277 14 95.2344 13.52C95.7677 13.0133 96.3944 12.64 97.1144 12.4C97.8344 12.1333 98.6077 12 99.4344 12H101.034C101.861 12 102.634 12.1333 103.354 12.4C104.074 12.64 104.688 13.0133 105.194 13.52C105.728 14 106.141 14.6 106.434 15.32C106.754 16.04 106.914 16.8667 106.914 17.8V20.6C106.914 20.8667 106.821 21.0933 106.634 21.28C106.474 21.44 106.261 21.52 105.994 21.52H104.914C104.674 21.52 104.461 21.44 104.274 21.28C104.088 21.0933 103.994 20.8667 103.994 20.6V18.04C103.994 16.9467 103.728 16.12 103.194 15.56C102.688 14.9733 101.914 14.68 100.874 14.68H99.5944C98.5544 14.68 97.7677 14.9733 97.2344 15.56C96.7277 16.12 96.4744 16.9467 96.4744 18.04V33.96C96.4744 36.2 97.5144 37.32 99.5944 37.32H100.874C101.914 37.32 102.688 37.04 103.194 36.48C103.728 35.8933 103.994 35.0533 103.994 33.96V30.6Z" />
        <Path path="M121.732 25.28C122.372 25.4933 122.879 25.7867 123.253 26.16C123.653 26.5333 123.959 26.96 124.173 27.44C124.386 27.8933 124.519 28.3867 124.573 28.92C124.653 29.4267 124.692 29.9333 124.692 30.44V37.56C124.692 37.9067 124.719 38.2533 124.772 38.6C124.852 38.92 124.893 39.16 124.893 39.32C124.893 39.7733 124.612 40 124.052 40H123.332C122.772 40 122.372 39.8533 122.132 39.56C121.892 39.24 121.772 38.8 121.772 38.24V30C121.772 28.0267 120.786 27.04 118.812 27.04H114.253V39.08C114.253 39.3467 114.159 39.5733 113.973 39.76C113.813 39.92 113.599 40 113.332 40H112.253C112.013 40 111.799 39.92 111.613 39.76C111.426 39.5733 111.332 39.3467 111.332 39.08V12.88C111.332 12.6133 111.426 12.4 111.613 12.24C111.799 12.08 112.013 12 112.253 12H113.332C113.572 12 113.786 12.08 113.973 12.24C114.159 12.4 114.253 12.6133 114.253 12.88V24.36H118.732C119.052 24.36 119.266 24.2 119.372 23.88L122.412 12.96C122.492 12.6667 122.612 12.44 122.772 12.28C122.932 12.0933 123.199 12 123.573 12H124.253C124.973 12 125.333 12.3067 125.333 12.92C125.333 13.0267 125.306 13.2133 125.253 13.48L121.732 25.28Z" />
        <Path path="M134.737 40C133.91 40 133.137 39.88 132.417 39.64C131.697 39.3733 131.07 39 130.537 38.52C130.03 38.0133 129.617 37.4 129.297 36.68C129.003 35.96 128.857 35.1333 128.857 34.2V30.6C128.857 30.3333 128.937 30.12 129.097 29.96C129.283 29.7733 129.51 29.68 129.777 29.68H130.857C131.097 29.68 131.31 29.7733 131.497 29.96C131.683 30.12 131.777 30.3333 131.777 30.6V33.96C131.777 35.0533 132.03 35.8933 132.537 36.48C133.07 37.04 133.857 37.32 134.897 37.32H136.377C137.337 37.32 138.057 37 138.537 36.36C139.017 35.72 139.257 34.92 139.257 33.96V32.16C139.257 31.52 139.203 30.9733 139.097 30.52C139.017 30.0667 138.87 29.68 138.657 29.36C138.443 29.0133 138.163 28.7067 137.817 28.44C137.497 28.1467 137.083 27.8667 136.577 27.6L132.337 25.24C131.323 24.68 130.55 23.9733 130.017 23.12C129.483 22.24 129.217 21.08 129.217 19.64V17.84C129.217 16.9067 129.363 16.08 129.657 15.36C129.977 14.64 130.39 14.0267 130.897 13.52C131.43 13.0133 132.057 12.64 132.777 12.4C133.497 12.1333 134.27 12 135.097 12H136.577C137.403 12 138.177 12.1333 138.897 12.4C139.617 12.64 140.23 13.0133 140.737 13.52C141.27 14 141.683 14.6 141.977 15.32C142.297 16.04 142.457 16.8667 142.457 17.8V20.6C142.457 20.8667 142.363 21.0933 142.177 21.28C142.017 21.44 141.803 21.52 141.537 21.52H140.457C140.217 21.52 140.003 21.44 139.817 21.28C139.63 21.0933 139.537 20.8667 139.537 20.6V18.04C139.537 16.9467 139.27 16.12 138.737 15.56C138.23 14.9733 137.457 14.68 136.417 14.68H135.017C134.057 14.68 133.337 14.9867 132.857 15.6C132.377 16.2133 132.137 17 132.137 17.96V19.28C132.137 20.0267 132.27 20.7067 132.537 21.32C132.803 21.9333 133.417 22.5067 134.377 23.04L139.097 25.72C140.19 26.3333 140.977 27.0933 141.457 28C141.937 28.9067 142.177 30.0267 142.177 31.36V34.12C142.177 35.0533 142.017 35.8933 141.697 36.64C141.403 37.36 140.99 37.9733 140.457 38.48C139.95 38.96 139.337 39.3333 138.617 39.6C137.897 39.8667 137.123 40 136.297 40H134.737Z" />
      </Group>
      <Path
        path="M49.546 25.272C49.546 35.363 41.365 43.544 31.274 43.544C21.181 43.544 13 35.363 13 25.272C13 15.181 21.181 7 31.274 7C41.365 7 49.546 15.181 49.546 25.272Z"
        color="#41BBFF"
      />
      <Path
        path="M31.502 35.364L22.052 26.294C20.798 25.221 20 23.63 20 21.85C20 18.619 22.618 16 25.85 16C28.566 16 30.845 17.856 31.502 20.367C32.159 17.856 34.438 16 37.154 16C40.386 16 43.004 18.619 43.004 21.85C43.004 23.63 42.206 25.221 40.952 26.294L31.502 35.364Z"
        color="white"
      />
    </Group>
  );
};

export const HacksSticker = { Sticker, size };