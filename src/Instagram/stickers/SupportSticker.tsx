/* eslint-disable max-len */
import React from "react";
import { Group, LinearGradient, Path, vec } from "@shopify/react-native-skia";

import type { StickerProps } from "./StickerComponent";

const size = { width: 220, height: 115 };

const Sticker = ({ matrix }: StickerProps) => {
  return (
    <Group matrix={matrix}>
      <Path
        path="M201.814 0.546021H46.81C34.042 0.546021 23.377 9.72001 21.056 21.821H16.273C10.365 21.821 5.36401 26.434 4.88801 32.323L0.380003 88.084C-0.162997 94.806 2.14801 101.503 6.72001 106.46C11.293 111.417 17.782 114.26 24.526 114.26H201.814C211.718 114.26 219.748 106.231 219.748 96.326V18.48C219.748 8.57502 211.718 0.546021 201.814 0.546021Z"
        color="white"
      />
      <Group>
        <LinearGradient
          start={vec(46.8103, 46.8103)}
          end={vec(46.8103, 8.28844)}
          colors={["#00B9FF", "#9713C5"]}
        />
        <Path path="M29.1252 57.6328C24.2396 62.3229 24.1419 70.1398 28.9298 74.83L44.5636 90.4638C45.8339 91.7341 47.7881 91.7341 49.0583 90.4638L64.6922 74.83C69.48 70.1398 69.3823 62.3229 64.4968 57.6328C59.7089 52.9426 52.0874 53.138 47.3972 57.8282L46.811 58.4144L46.2247 57.8282C43.7819 55.4831 40.6552 54.2129 37.4307 54.2129C34.4016 54.2129 31.3726 55.3854 29.1252 57.6328Z" />
        <Path path="M16.2263 28.7102C13.8813 28.7102 11.927 30.469 11.7316 32.9118L7.23687 88.6073C6.84602 93.4929 8.50712 98.2808 11.7316 101.798C15.0538 105.414 19.6462 107.368 24.5318 107.368H69.0883C73.9738 107.368 78.5663 105.414 81.8885 101.798C85.1129 98.2808 86.774 93.4929 86.3832 88.6073L81.8885 32.9118C81.693 30.469 79.7388 28.7102 77.3937 28.7102H16.2263ZM18.4737 95.6425C16.9103 93.8837 16.1286 91.7341 16.324 89.389L20.5256 37.7973H73.0944L77.296 89.389C77.4914 91.7341 76.7097 93.8837 75.1464 95.6425C73.583 97.3036 71.4333 98.2808 69.0883 98.2808H24.5318C22.1867 98.2808 20.0371 97.3036 18.4737 95.6425Z" />
        <Path path="M27.4641 26.756V43.5623C27.4641 46.1028 29.5161 48.1548 32.0566 48.1548C34.4994 48.1548 36.5513 46.1028 36.5513 43.5623V26.756C36.5513 21.0887 41.1438 16.4963 46.811 16.4963C52.4783 16.4963 57.0707 21.0887 57.0707 26.756V43.5623C57.0707 46.1028 59.1227 48.1548 61.5655 48.1548C64.106 48.1548 66.1579 46.1028 66.1579 43.5623V26.756C66.1579 16.1054 57.4616 7.4091 46.811 7.4091C36.1605 7.4091 27.4641 16.1054 27.4641 26.756Z" />
      </Group>
      <Path
        path="M106.094 34.381C107.965 34.381 109.069 33.077 109.069 30.403V29.735C109.069 27.262 108.4 26.242 106.327 25.49L105.024 25.023C101.782 23.853 100.712 22.349 100.712 18.572V18.237C100.712 14.795 102.216 12.322 105.793 12.322C109.236 12.322 110.873 14.762 110.873 17.903C110.873 18.538 110.338 19.073 109.703 19.073C109.069 19.073 108.55 18.538 108.533 17.903C108.449 15.631 107.531 14.461 105.793 14.461C103.921 14.461 103.052 15.765 103.052 18.204V18.639C103.052 21.112 103.721 22.115 105.793 22.851L107.096 23.318C110.338 24.488 111.407 26.026 111.407 29.802V30.304C111.407 34.047 109.637 36.521 106.094 36.521C104.623 36.521 103.303 36.068 102.401 35.166C101.297 34.064 100.813 32.242 100.813 30.972C100.813 30.27 101.281 29.735 101.949 29.735C102.584 29.735 103.085 30.27 103.119 30.905C103.253 33.178 104.323 34.381 106.094 34.381Z"
        color="#3376FF"
      />
      <Path
        path="M124.008 13.759C124.008 13.124 124.543 12.589 125.178 12.589C125.813 12.589 126.348 13.124 126.348 13.759V29.836C126.348 34.348 124.175 36.554 120.866 36.554C117.558 36.554 115.385 34.348 115.385 29.836V13.759C115.385 13.124 115.92 12.589 116.555 12.589C117.19 12.589 117.725 13.124 117.725 13.759V29.468C117.725 32.844 118.761 34.414 120.866 34.414C122.972 34.414 124.008 32.844 124.008 29.468V13.759Z"
        color="#3376FF"
      />
      <Path
        path="M135.238 14.8949H133.399V24.4539H135.238C138.012 24.4539 139.216 22.7489 139.216 19.6739C139.216 16.5989 138.012 14.8949 135.238 14.8949ZM135.506 12.7219C139.315 12.7219 141.554 15.0619 141.554 19.6739C141.554 24.2869 139.315 26.6259 135.506 26.6259H133.399V35.0819C133.399 35.7169 132.865 36.2519 132.23 36.2519C131.594 36.2519 131.06 35.7169 131.06 35.0819V13.8919C131.06 13.1899 131.528 12.7219 132.23 12.7219H135.506Z"
        color="#3376FF"
      />
      <Path
        path="M149.81 14.8949H147.971V24.4539H149.81C152.584 24.4539 153.788 22.7489 153.788 19.6739C153.788 16.5989 152.584 14.8949 149.81 14.8949ZM150.078 12.7219C153.887 12.7219 156.126 15.0619 156.126 19.6739C156.126 24.2869 153.887 26.6259 150.078 26.6259H147.971V35.0819C147.971 35.7169 147.437 36.2519 146.802 36.2519C146.166 36.2519 145.632 35.7169 145.632 35.0819V13.8919C145.632 13.1899 146.1 12.7219 146.802 12.7219H150.078Z"
        color="#3376FF"
      />
      <Path
        path="M162.043 29.101C162.043 32.777 163.18 34.381 165.318 34.381C167.458 34.381 168.594 32.777 168.594 29.101V19.743C168.594 16.066 167.458 14.461 165.318 14.461C163.18 14.461 162.043 16.066 162.043 19.743V29.101ZM170.934 29.468C170.934 34.281 168.694 36.521 165.318 36.521C161.943 36.521 159.703 34.281 159.703 29.468V19.374C159.703 14.562 161.943 12.323 165.318 12.323C168.694 12.323 170.934 14.562 170.934 19.374V29.468Z"
        color="#3376FF"
      />
      <Path
        path="M179.489 14.8619H177.651V24.1529H179.489C182.263 24.1529 183.467 22.5149 183.467 19.5079C183.467 16.4999 182.263 14.8619 179.489 14.8619ZM179.723 12.7219C183.567 12.7219 185.806 14.9959 185.806 19.5079C185.806 22.6489 184.737 24.6879 182.799 25.6569L186.107 34.5809C186.174 34.7489 186.207 34.9159 186.207 35.0829C186.207 35.7169 185.673 36.2529 185.038 36.2529C184.453 36.2529 184.068 35.8839 183.901 35.3829L180.693 26.2579C180.391 26.2929 180.057 26.2929 179.723 26.2929H177.651V35.0829C177.651 35.7169 177.116 36.2529 176.481 36.2529C175.846 36.2529 175.311 35.7169 175.311 35.0829V13.8919C175.311 13.1899 175.779 12.7219 176.481 12.7219H179.723Z"
        color="#3376FF"
      />
      <Path
        path="M198.273 12.7229C198.875 12.7229 199.342 13.1909 199.342 13.7929C199.342 14.3949 198.875 14.8629 198.273 14.8629H194.897V35.0829C194.897 35.7179 194.363 36.2529 193.727 36.2529C193.092 36.2529 192.557 35.7179 192.557 35.0829V14.8629H189.182C188.581 14.8629 188.113 14.3949 188.113 13.7929C188.113 13.1909 188.581 12.7229 189.182 12.7229H198.273Z"
        color="#3376FF"
      />
      <Path
        path="M120.03 66.7909C121.902 66.7909 123.005 65.4869 123.005 62.8139V62.1449C123.005 59.6719 122.337 58.6529 120.264 57.8999L118.961 57.4329C115.719 56.2629 114.649 54.7589 114.649 50.9819V50.6479C114.649 47.2049 116.153 44.7319 119.73 44.7319C123.173 44.7319 124.81 47.1719 124.81 50.3129C124.81 50.9489 124.275 51.4829 123.64 51.4829C123.005 51.4829 122.487 50.9489 122.47 50.3129C122.386 48.0409 121.467 46.8709 119.73 46.8709C117.858 46.8709 116.989 48.1749 116.989 50.6139V51.0489C116.989 53.5219 117.657 54.5249 119.73 55.2609L121.033 55.7279C124.275 56.8979 125.344 58.4359 125.344 62.2119V62.7139C125.344 66.4569 123.573 68.9309 120.03 68.9309C118.56 68.9309 117.24 68.4789 116.338 67.5769C115.234 66.4739 114.75 64.6519 114.75 63.3819C114.75 62.6809 115.218 62.1449 115.886 62.1449C116.521 62.1449 117.022 62.6809 117.056 63.3149C117.189 65.5879 118.259 66.7909 120.03 66.7909Z"
        color="#3376FF"
      />
      <Path
        path="M135.372 61.645L131.829 51.517V67.494C131.829 68.128 131.294 68.664 130.659 68.664C130.024 68.664 129.489 68.128 129.489 67.494V46.169C129.489 45.535 130.024 45 130.659 45C131.261 45 131.679 45.301 132.029 46.303L136.441 58.837L140.853 46.303C141.204 45.301 141.622 45 142.224 45C142.858 45 143.393 45.535 143.393 46.169V67.494C143.393 68.128 142.858 68.664 142.224 68.664C141.588 68.664 141.054 68.128 141.054 67.494V51.517L137.511 61.645C137.294 62.247 136.976 62.513 136.441 62.513C135.906 62.513 135.589 62.247 135.372 61.645Z"
        color="#3376FF"
      />
      <Path
        path="M150.746 60.608H155.459L153.119 49.879L150.746 60.608ZM154.456 46.069L159.303 67.058C159.336 67.225 159.369 67.359 159.369 67.493C159.369 68.128 158.834 68.663 158.199 68.663C157.598 68.663 157.163 68.228 157.029 67.66L155.927 62.747H150.278L149.209 67.66C149.092 68.228 148.641 68.663 148.039 68.663C147.403 68.663 146.869 68.128 146.869 67.493C146.869 67.359 146.902 67.225 146.935 67.058L151.782 46.069C151.933 45.434 152.484 45 153.119 45C153.754 45 154.306 45.434 154.456 46.069Z"
        color="#3376FF"
      />
      <Path
        path="M164.015 68.529C163.314 68.529 162.845 68.061 162.845 67.359V46.169C162.845 45.534 163.38 45 164.015 45C164.651 45 165.185 45.534 165.185 46.169V66.39H171.369C171.97 66.39 172.438 66.858 172.438 67.46C172.438 68.061 171.97 68.529 171.369 68.529H164.015Z"
        color="#3376FF"
      />
      <Path
        path="M176.982 68.529C176.281 68.529 175.813 68.061 175.813 67.359V46.169C175.813 45.534 176.347 45 176.982 45C177.618 45 178.152 45.534 178.152 46.169V66.39H184.336C184.937 66.39 185.405 66.858 185.405 67.46C185.405 68.061 184.937 68.529 184.336 68.529H176.982Z"
        color="#3376FF"
      />
      <Path
        path="M99.409 89.98V98.804H101.615C103.954 98.804 105.224 97.534 105.224 94.359C105.224 91.451 104.188 89.98 101.916 89.98H99.409ZM101.615 87.841C103.888 87.841 104.757 86.404 104.757 83.764C104.757 81.023 103.687 79.686 101.146 79.686H99.409V87.841H101.615ZM101.381 77.547C104.99 77.547 107.096 79.418 107.096 83.831C107.096 86.237 106.294 88.042 104.689 88.777C106.528 89.545 107.564 91.417 107.564 94.326C107.564 99.004 105.358 100.943 101.882 100.943H98.239C97.537 100.943 97.069 100.475 97.069 99.773V78.717C97.069 78.015 97.537 77.547 98.239 77.547H101.381Z"
        color="#3376FF"
      />
      <Path
        path="M120.164 78.576C120.164 77.94 120.699 77.406 121.334 77.406C121.97 77.406 122.504 77.94 122.504 78.576V94.652C122.504 99.164 120.331 101.37 117.022 101.37C113.714 101.37 111.541 99.164 111.541 94.652V78.576C111.541 77.94 112.076 77.406 112.711 77.406C113.346 77.406 113.881 77.94 113.881 78.576V94.284C113.881 97.66 114.917 99.231 117.022 99.231C119.128 99.231 120.164 97.66 120.164 94.284V78.576Z"
        color="#3376FF"
      />
      <Path
        path="M131.963 99.201C133.834 99.201 134.938 97.898 134.938 95.224V94.555C134.938 92.083 134.269 91.063 132.196 90.311L130.894 89.843C127.651 88.674 126.582 87.169 126.582 83.392V83.058C126.582 79.616 128.086 77.142 131.662 77.142C135.105 77.142 136.742 79.582 136.742 82.724C136.742 83.359 136.207 83.893 135.572 83.893C134.938 83.893 134.419 83.359 134.402 82.724C134.319 80.451 133.4 79.281 131.662 79.281C129.79 79.281 128.921 80.585 128.921 83.025V83.459C128.921 85.932 129.59 86.935 131.662 87.671L132.966 88.138C136.207 89.308 137.277 90.846 137.277 94.623V95.124C137.277 98.867 135.506 101.341 131.963 101.341C130.492 101.341 129.172 100.889 128.27 99.987C127.167 98.884 126.682 97.062 126.682 95.792C126.682 95.091 127.15 94.555 127.818 94.555C128.453 94.555 128.955 95.091 128.988 95.725C129.122 97.998 130.192 99.201 131.963 99.201Z"
        color="#3376FF"
      />
      <Path
        path="M143.761 99.903C143.761 100.538 143.227 101.073 142.591 101.073C141.956 101.073 141.422 100.538 141.422 99.903V78.58C141.422 77.944 141.956 77.41 142.591 77.41C143.227 77.41 143.761 77.944 143.761 78.58V99.903Z"
        color="#3376FF"
      />
      <Path
        path="M157.698 78.577C157.698 77.941 158.233 77.407 158.868 77.407C159.503 77.407 160.038 77.941 160.038 78.577V99.9C160.038 100.535 159.503 101.07 158.868 101.07C158.166 101.07 157.731 100.736 157.364 99.8L150.98 83.223V99.9C150.98 100.535 150.445 101.07 149.81 101.07C149.176 101.07 148.64 100.535 148.64 99.9V78.577C148.64 77.941 149.176 77.407 149.81 77.407C150.512 77.407 150.947 77.741 151.314 78.677L157.698 95.255V78.577Z"
        color="#3376FF"
      />
      <Path
        path="M172.471 87.8059C173.073 87.8059 173.54 88.2739 173.54 88.8749C173.54 89.4769 173.073 89.9449 172.471 89.9449H167.257V98.8019H173.474C174.075 98.8019 174.543 99.2699 174.543 99.8709C174.543 100.473 174.075 100.941 173.474 100.941H166.087C165.386 100.941 164.917 100.473 164.917 99.7709V78.7149C164.917 78.0129 165.386 77.5449 166.087 77.5449H173.474C174.075 77.5449 174.543 78.0129 174.543 78.6149C174.543 79.2159 174.075 79.6839 173.474 79.6839H167.257V87.8059H172.471Z"
        color="#3376FF"
      />
      <Path
        path="M183.333 99.201C185.205 99.201 186.308 97.898 186.308 95.224V94.555C186.308 92.083 185.64 91.063 183.567 90.311L182.264 89.843C179.021 88.674 177.952 87.169 177.952 83.392V83.058C177.952 79.616 179.456 77.142 183.032 77.142C186.475 77.142 188.112 79.582 188.112 82.724C188.112 83.359 187.578 83.893 186.942 83.893C186.308 83.893 185.79 83.359 185.773 82.724C185.689 80.451 184.77 79.281 183.032 79.281C181.161 79.281 180.292 80.585 180.292 83.025V83.459C180.292 85.932 180.96 86.935 183.032 87.671L184.336 88.138C187.578 89.308 188.647 90.846 188.647 94.623V95.124C188.647 98.867 186.876 101.341 183.333 101.341C181.862 101.341 180.542 100.889 179.64 99.987C178.537 98.884 178.053 97.062 178.053 95.792C178.053 95.091 178.521 94.555 179.188 94.555C179.824 94.555 180.325 95.091 180.358 95.725C180.492 97.998 181.562 99.201 183.333 99.201Z"
        color="#3376FF"
      />
      <Path
        path="M197.538 99.201C199.409 99.201 200.513 97.898 200.513 95.224V94.555C200.513 92.083 199.844 91.063 197.771 90.311L196.468 89.843C193.226 88.674 192.156 87.169 192.156 83.392V83.058C192.156 79.616 193.66 77.142 197.237 77.142C200.68 77.142 202.317 79.582 202.317 82.724C202.317 83.359 201.782 83.893 201.147 83.893C200.513 83.893 199.994 83.359 199.977 82.724C199.893 80.451 198.975 79.281 197.237 79.281C195.365 79.281 194.496 80.585 194.496 83.025V83.459C194.496 85.932 195.165 86.935 197.237 87.671L198.54 88.138C201.782 89.308 202.851 90.846 202.851 94.623V95.124C202.851 98.867 201.08 101.341 197.538 101.341C196.067 101.341 194.747 100.889 193.845 99.987C192.741 98.884 192.257 97.062 192.257 95.792C192.257 95.091 192.725 94.555 193.393 94.555C194.028 94.555 194.529 95.091 194.563 95.725C194.696 97.998 195.767 99.201 197.538 99.201Z"
        color="#3376FF"
      />
    </Group>
  );
};

export const SupportSticker = { Sticker, size };