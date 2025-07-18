import classNames from 'classnames';
import type { FC, SVGProps } from 'react';

import type { LogoVariant } from '#ui/types';

type NodeJsLogoProps = SVGProps<SVGSVGElement> & {
  variant?: LogoVariant;
  ariaLabel?: string;
};

const NodejsIcon: FC<NodeJsLogoProps> = ({
  className,
  variant = 'default',
  ariaLabel = '',
  ...props
}) => {
  return (
    <svg
      width="267"
      height="80"
      viewBox="0 0 267 80"
      fill="none"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('fill-[#333333] dark:fill-white', className)}
      {...props}
    >
      <mask
        id="mask0_1803_3458"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="267"
        height="80"
      >
        <path d="M267 0H0V79.3784H267V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_1803_3458)">
        <path
          d="M234.983 78.7547C234.292 78.7547 233.648 78.5695 233.05 78.2452L226.929 74.5871C226.008 74.0776 226.469 73.8924 226.745 73.7998C227.987 73.3829 228.217 73.2903 229.506 72.5495C229.644 72.4569 229.828 72.5033 229.966 72.5959L234.66 75.4206C234.844 75.5132 235.074 75.5132 235.212 75.4206L253.575 64.7235C253.758 64.6309 253.852 64.4457 253.852 64.2143V42.8665C253.852 42.6351 253.758 42.4499 253.575 42.3573L235.212 31.7067C235.028 31.614 234.798 31.614 234.66 31.7067L216.298 42.3573C216.114 42.4499 216.022 42.6813 216.022 42.8665V64.2143C216.022 64.3995 216.114 64.6309 216.298 64.7235L221.314 67.641C224.029 69.0301 225.732 67.4094 225.732 65.7886V44.7189C225.732 44.4411 225.962 44.1633 226.285 44.1633H228.632C228.908 44.1633 229.184 44.3947 229.184 44.7189V65.7886C229.184 69.447 227.205 71.577 223.753 71.577C222.695 71.577 221.867 71.577 219.519 70.4195L214.687 67.641C213.491 66.9463 212.754 65.6498 212.754 64.2604V42.913C212.754 41.5236 213.491 40.2271 214.687 39.5324L233.05 28.8356C234.2 28.1873 235.765 28.1873 236.915 28.8356L255.278 39.5324C256.474 40.2271 257.21 41.5236 257.21 42.913V64.2604C257.21 65.6498 256.474 66.9463 255.278 67.641L236.915 78.3378C236.363 78.5695 235.673 78.7547 234.983 78.7547Z"
          fill="#5FA04E"
        />
        <path
          d="M240.69 64.075C232.635 64.075 230.978 60.3704 230.978 57.2215C230.978 56.9437 231.208 56.6658 231.53 56.6658H233.923C234.2 56.6658 234.43 56.8511 234.43 57.1289C234.798 59.5831 235.856 60.7873 240.735 60.7873C244.601 60.7873 246.258 59.9074 246.258 57.8236C246.258 56.6197 245.796 55.7398 239.768 55.1377C234.752 54.6282 231.622 53.5169 231.622 49.4881C231.622 45.7374 234.752 43.5145 239.998 43.5145C245.89 43.5145 248.789 45.5521 249.157 49.9976C249.157 50.1366 249.111 50.2754 249.02 50.4144C248.926 50.507 248.789 50.5997 248.649 50.5997H246.21C245.982 50.5997 245.751 50.4144 245.705 50.1828C245.152 47.6359 243.725 46.8025 239.952 46.8025C235.718 46.8025 235.212 48.2842 235.212 49.3955C235.212 50.7384 235.81 51.1553 241.517 51.8962C247.177 52.637 249.847 53.7021 249.847 57.6845C249.847 61.7595 246.487 64.075 240.69 64.075Z"
          fill="#5FA04E"
        />
        <path
          d="M267.2 41.6621C267.2 43.6071 265.588 45.2279 263.654 45.2279C261.722 45.2279 260.111 43.6533 260.111 41.6621C260.111 39.6247 261.768 38.0966 263.654 38.0966C265.542 38.0966 267.2 39.6709 267.2 41.6621ZM260.664 41.6621C260.664 43.3293 261.999 44.6722 263.608 44.6722C265.266 44.6722 266.601 43.2829 266.601 41.6621C266.601 39.9951 265.266 38.6986 263.608 38.6986C262.045 38.6986 260.664 39.9951 260.664 41.6621ZM262.321 39.6709H263.702C264.162 39.6709 265.083 39.6709 265.083 40.736C265.083 41.4769 264.621 41.6159 264.344 41.7085C264.898 41.7547 264.943 42.1254 264.989 42.6346C265.035 42.9588 265.083 43.5145 265.174 43.6997H264.344C264.344 43.5145 264.207 42.4958 264.207 42.4494C264.162 42.218 264.07 42.1254 263.794 42.1254H263.103V43.7459H262.321V39.6709ZM263.057 41.4307H263.654C264.162 41.4307 264.253 41.0603 264.253 40.875C264.253 40.3194 263.885 40.3194 263.654 40.3194H263.012V41.4307H263.057Z"
          fill="#5FA04E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.6737 41.9539C43.6737 41.1204 43.2136 40.3334 42.4773 39.9165L23.0104 28.5712C22.6883 28.386 22.3201 28.2934 21.9519 28.2472C21.9059 28.2472 21.7679 28.2472 21.7679 28.2472C21.3997 28.2472 21.0315 28.386 20.7094 28.5712L1.19654 39.8701C0.460209 40.287 0 41.0743 0 41.9539L0.0460209 72.3315C0.0460209 72.7484 0.276126 73.165 0.644293 73.3502C1.01246 73.5819 1.47267 73.5819 1.79482 73.3502L13.3921 66.682C14.1284 66.2653 14.5886 65.4781 14.5886 64.6446V50.4282C14.5886 49.5947 15.0488 48.8074 15.7852 48.3908L20.7094 45.5197C21.0776 45.288 21.4917 45.1954 21.9059 45.1954C22.3201 45.1954 22.7343 45.288 23.0565 45.5197L27.9806 48.3908C28.7169 48.8074 29.1773 49.5947 29.1773 50.4282V64.6446C29.1773 65.4781 29.6375 66.2653 30.3738 66.682L41.8791 73.3502C42.2471 73.5819 42.7073 73.5819 43.0755 73.3502C43.4438 73.165 43.6737 72.7484 43.6737 72.3315V41.9539Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M137.465 0.138922C137.096 -0.0463072 136.636 -0.0463072 136.314 0.138922C135.946 0.370456 135.716 0.740915 135.716 1.15768V31.2573C135.716 31.5351 135.578 31.8129 135.301 31.9984C135.025 32.1372 134.749 32.1372 134.473 31.9984L129.595 29.1735C128.859 28.7569 127.984 28.7569 127.248 29.1735L107.735 40.5188C106.999 40.9357 106.539 41.7227 106.539 42.5562V65.2004C106.539 66.0342 106.999 66.8212 107.735 67.2381L127.248 78.5834C127.984 79 128.859 79 129.595 78.5834L149.108 67.2381C149.844 66.8212 150.304 66.0342 150.304 65.2004V8.75207C150.304 7.87222 149.844 7.085 149.108 6.66824L137.465 0.138922ZM135.67 57.7451C135.67 57.9765 135.578 58.1617 135.394 58.2544L128.72 62.1444C128.536 62.237 128.306 62.237 128.122 62.1444L121.449 58.2544C121.265 58.1617 121.173 57.9303 121.173 57.7451V49.9656C121.173 49.7339 121.265 49.5487 121.449 49.4561L128.122 45.5663C128.306 45.4737 128.536 45.4737 128.72 45.5663L135.394 49.4561C135.578 49.5487 135.67 49.7803 135.67 49.9656V57.7451Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M202.398 49.7801C203.135 49.3632 203.549 48.5762 203.549 47.7425V42.2319C203.549 41.3985 203.089 40.6112 202.398 40.1946L183.023 28.8957C182.287 28.4788 181.413 28.4788 180.676 28.8957L161.164 40.2407C160.427 40.6576 159.967 41.4449 159.967 42.2784V64.9226C159.967 65.7561 160.427 66.5434 161.164 66.96L180.538 78.0737C181.275 78.4905 182.149 78.4905 182.839 78.0737L194.575 71.4983C194.943 71.3131 195.173 70.8962 195.173 70.4793C195.173 70.0627 194.943 69.6459 194.575 69.4606L174.97 58.1153C174.602 57.8839 174.372 57.5135 174.372 57.0966V50.0117C174.372 49.5949 174.602 49.178 174.97 48.9928L181.091 45.4735C181.459 45.2421 181.919 45.2421 182.287 45.4735L188.408 48.9928C188.776 49.2245 189.006 49.5949 189.006 50.0117V55.5685C189.006 55.9853 189.236 56.4019 189.605 56.5872C189.973 56.8188 190.433 56.8188 190.801 56.5872L202.398 49.7801Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M181.551 48.7155C181.689 48.6228 181.874 48.6228 182.012 48.7155L185.739 50.8919C185.877 50.9845 185.969 51.1235 185.969 51.3087V55.6615C185.969 55.8468 185.877 55.9858 185.739 56.0784L182.012 58.2548C181.874 58.3474 181.689 58.3474 181.551 58.2548L177.824 56.0784C177.686 55.9858 177.594 55.8468 177.594 55.6615V51.3087C177.594 51.1235 177.686 50.9845 177.824 50.8919L181.551 48.7155Z"
          fill="#5FA04E"
        />

        {variant === 'pride' ? (
          <g clip-path="url(#clip0_1_1661)">
            <mask
              id="mask1_1_1661"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="53"
              y="28"
              width="44"
              height="51"
            >
              <path
                d="M76.3478 28.9593C75.9882 28.7545 75.5815 28.6469 75.1677 28.6469C74.7539 28.6469 74.3472 28.7545 73.9876 28.9593L54.5067 40.2057C53.7665 40.6229 53.35 41.4099 53.35 42.2422V64.7816C53.35 65.6147 53.8126 66.4016 54.5067 66.8181L73.9876 78.0645C74.3472 78.2693 74.7539 78.3769 75.1677 78.3769C75.5815 78.3769 75.9882 78.2693 76.3478 78.0645L95.8286 66.8181C96.5689 66.4016 96.9854 65.6139 96.9854 64.7816V42.2422C96.9813 41.8325 96.8729 41.4307 96.6705 41.0745C96.4681 40.7184 96.1784 40.4196 95.8286 40.2064L76.3478 28.9593Z"
                fill="url(#paint0_linear_1_1661)"
              />
            </mask>
            <g mask="url(#mask1_1_1661)">
              <path
                d="M97.0564 70.1316H53.35V78.39H97.0564V70.1316Z"
                fill="#750787"
              />
              <path
                d="M97.0564 61.7731H53.35V70.131H97.0564V61.7731Z"
                fill="#004DFF"
              />
              <path
                d="M97.0564 53.5147H53.35V61.7732H97.0564V53.5147Z"
                fill="#008026"
              />
              <path
                d="M97.0564 45.2563H53.35V53.5148H97.0564V45.2563Z"
                fill="#FFED00"
              />
              <path
                d="M97.0564 36.998H53.35V45.2565H97.0564V36.998Z"
                fill="#FF8C00"
              />
              <path
                d="M97.0564 28.64H53.35V36.998H97.0564V28.64Z"
                fill="#E40303"
              />
            </g>
            <g style={{ mixBlendMode: 'luminosity' }} opacity="0.5">
              <path
                d="M76.3478 28.9593C75.9882 28.7545 75.5815 28.6469 75.1677 28.6469C74.7539 28.6469 74.3472 28.7545 73.9876 28.9593L54.5067 40.2057C53.7665 40.6229 53.35 41.4099 53.35 42.2422V64.7816C53.35 65.6147 53.8126 66.4016 54.5067 66.8181L73.9876 78.0645C74.3472 78.2693 74.7539 78.3769 75.1677 78.3769C75.5815 78.3769 75.9882 78.2693 76.3478 78.0645L95.8286 66.8181C96.5689 66.4016 96.9854 65.6139 96.9854 64.7816V42.2422C96.9813 41.8325 96.8729 41.4307 96.6705 41.0745C96.4681 40.7184 96.1784 40.4196 95.8286 40.2064L76.3478 28.9593Z"
                fill="white"
              />
              <g style={{ mixBlendMode: 'luminosity' }}>
                <mask
                  id="mask2_1_1661"
                  style={{ maskType: 'alpha' }}
                  maskUnits="userSpaceOnUse"
                  x="53"
                  y="28"
                  width="44"
                  height="51"
                >
                  <path
                    d="M76.3478 28.9593C75.9882 28.7545 75.5815 28.6469 75.1677 28.6469C74.7539 28.6469 74.3472 28.7545 73.9876 28.9593L54.5067 40.2057C53.7665 40.6229 53.35 41.4099 53.35 42.2422V64.7816C53.35 65.6147 53.8126 66.4016 54.5067 66.8181L73.9876 78.0645C74.3472 78.2693 74.7539 78.3769 75.1677 78.3769C75.5815 78.3769 75.9882 78.2693 76.3478 78.0645L95.8286 66.8181C96.5689 66.4016 96.9854 65.6139 96.9854 64.7816V42.2422C96.9813 41.8325 96.8729 41.4307 96.6705 41.0745C96.4681 40.7184 96.1784 40.4196 95.8286 40.2064L76.3478 28.9593Z"
                    fill="url(#paint1_linear_1_1661)"
                  />
                </mask>
                <g mask="url(#mask2_1_1661)">
                  <path
                    d="M76.3478 28.9593C75.9882 28.7545 75.5815 28.6469 75.1677 28.6469C74.7539 28.6469 74.3472 28.7545 73.9876 28.9593L54.5067 40.2057C53.7665 40.6229 53.35 41.4099 53.35 42.2422V64.7816C53.35 65.6147 53.8126 66.4016 54.5067 66.8181L73.9876 78.0645C74.3472 78.2693 74.7539 78.3769 75.1677 78.3769C75.5815 78.3769 75.9882 78.2693 76.3478 78.0645L95.8286 66.8181C96.5689 66.4016 96.9854 65.6139 96.9854 64.7816V42.2422C96.9813 41.8325 96.8729 41.4307 96.6705 41.0745C96.4681 40.7184 96.1784 40.4196 95.8286 40.2064L76.3478 28.9593Z"
                    fill="url(#paint2_linear_1_1661)"
                  />
                  <g filter="url(#filter0_d_1_1661)">
                    <path
                      d="M95.8746 40.2064L76.301 28.9586C76.1087 28.8617 75.9073 28.7843 75.6996 28.7277L53.8153 66.2174C54.0002 66.4491 54.292 66.7869 54.5237 66.9258L73.9875 78.0645C74.5428 78.3882 75.1903 78.481 75.7924 78.2954L96.3832 40.6229C96.2478 40.4469 96.0738 40.3044 95.8746 40.2064Z"
                      fill="url(#paint3_linear_1_1661)"
                    />
                  </g>
                  <g filter="url(#filter1_d_1_1661)">
                    <path
                      d="M95.8265 66.8181C96.3818 66.4937 96.8826 65.8866 96.8826 65.1549L75.5587 28.6823C75.0033 28.5895 74.4019 28.6356 73.8926 28.9593L54.4585 40.1596L75.4198 78.3882C75.7247 78.3383 76.0207 78.2448 76.2989 78.1105L95.8265 66.8181Z"
                      fill="url(#paint4_linear_1_1661)"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        ) : (
          <>
            <path
              d="M76.3012 28.9882C75.5647 28.5716 74.6903 28.5716 73.954 28.9882L54.5792 40.241C53.8429 40.6578 53.4287 41.4449 53.4287 42.2786V64.83C53.4287 65.6637 53.8889 66.4507 54.5792 66.8676L73.954 78.1203C74.6903 78.5369 75.5647 78.5369 76.3012 78.1203L95.6758 66.8676C96.4123 66.4507 96.8263 65.6637 96.8263 64.83V42.2786C96.8263 41.4449 96.3662 40.6578 95.6758 40.241L76.3012 28.9882Z"
              fill="url(#paint0_linear_1803_3458)"
            />
            <path
              d="M95.7221 40.241L76.2554 28.9882C76.0714 28.8956 75.8412 28.803 75.6572 28.7568L53.8433 66.3119C54.0273 66.5433 54.2575 66.7286 54.4874 66.8676L73.9544 78.1203C74.5067 78.4443 75.1508 78.5369 75.749 78.3517L96.2284 40.6578C96.0904 40.4726 95.9063 40.3336 95.7221 40.241Z"
              fill="url(#paint1_linear_1803_3458)"
            />
            <path
              d="M95.7224 66.8669C96.2747 66.5427 96.6889 65.9871 96.8729 65.385L75.5651 28.7098C75.013 28.6172 74.4146 28.6633 73.9085 28.9876L54.5796 40.1939L75.427 78.4437C75.7031 78.3973 76.0255 78.3046 76.3016 78.1659L95.7224 66.8669Z"
              fill="url(#paint2_linear_1803_3458)"
            />
          </>
        )}
      </g>

      {variant === 'pride' ? (
        <defs>
          <filter
            id="filter0_d_1_1661"
            x="41.8153"
            y="16.7277"
            width="66.5679"
            height="73.6624"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_1661"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_1661"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_1_1661"
            x="42.4585"
            y="16.64"
            width="66.4241"
            height="73.7482"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_1661"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_1661"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1_1661"
            x1="83.1011"
            y1="37.3355"
            x2="65.4825"
            y2="73.2718"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3F873F" />
            <stop offset="0.33" stop-color="#3F8B3D" />
            <stop offset="0.637" stop-color="#3E9638" />
            <stop offset="0.934" stop-color="#3DA92E" />
            <stop offset="1" stop-color="#3DAE2B" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_1661"
            x1="83.1011"
            y1="37.3355"
            x2="65.4825"
            y2="73.2718"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3F873F" />
            <stop offset="0.33" stop-color="#3F8B3D" />
            <stop offset="0.637" stop-color="#3E9638" />
            <stop offset="0.934" stop-color="#3DA92E" />
            <stop offset="1" stop-color="#3DAE2B" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_1661"
            x1="83.1011"
            y1="37.3355"
            x2="65.4825"
            y2="73.2718"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3F873F" />
            <stop offset="0.33" stop-color="#3F8B3D" />
            <stop offset="0.637" stop-color="#3E9638" />
            <stop offset="0.934" stop-color="#3DA92E" />
            <stop offset="1" stop-color="#3DAE2B" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_1661"
            x1="72.2067"
            y1="56.1434"
            x2="121.636"
            y2="19.6297"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.138" stop-color="#3F873F" />
            <stop offset="0.402" stop-color="#52A044" />
            <stop offset="0.713" stop-color="#64B749" />
            <stop offset="0.908" stop-color="#6ABF4B" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1_1661"
            x1="52.636"
            y1="53.5048"
            x2="97.7135"
            y2="53.5048"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.092" stop-color="#6ABF4B" />
            <stop offset="0.287" stop-color="#64B749" />
            <stop offset="0.598" stop-color="#52A044" />
            <stop offset="0.862" stop-color="#3F873F" />
          </linearGradient>
          <clipPath id="clip0_1_1661">
            <rect
              width="43.7067"
              height="49.75"
              fill="white"
              transform="translate(53.35 28.64)"
            />
          </clipPath>
        </defs>
      ) : (
        <defs>
          <linearGradient
            id="paint0_linear_1803_3458"
            x1="83.0183"
            y1="37.3689"
            x2="65.3246"
            y2="73.2407"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3F873F" />
            <stop offset="0.3296" stopColor="#3F8B3D" />
            <stop offset="0.6367" stopColor="#3E9638" />
            <stop offset="0.9341" stopColor="#3DA92E" />
            <stop offset="1" stopColor="#3DAE2B" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1803_3458"
            x1="72.1833"
            y1="56.1876"
            x2="121.552"
            y2="19.937"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.1376" stopColor="#3F873F" />
            <stop offset="0.4016" stopColor="#52A044" />
            <stop offset="0.7129" stopColor="#64B749" />
            <stop offset="0.9081" stopColor="#6ABF4B" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1803_3458"
            x1="52.7188"
            y1="53.5463"
            x2="97.551"
            y2="53.5463"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0919165" stopColor="#6ABF4B" />
            <stop offset="0.2871" stopColor="#64B749" />
            <stop offset="0.5984" stopColor="#52A044" />
            <stop offset="0.8624" stopColor="#3F873F" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
};

export default NodejsIcon;
