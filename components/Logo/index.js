import { Grid } from "@mui/material";

export const Logo = () => (
  <Grid item xs={12} display="flex" justifyContent="center">
    <div
      style={{
        border: "solid 2px #6f9be2",
        borderRadius: "50%",
        height: " 100px",
        width: " 100px",
        display: " flex",
        justifyContent: " center",
        alignItems: " center",
      }}
    >
      <svg
        viewBox="7.889 6 173.466 249.581"
        xmlns="http://www.w3.org/2000/svg"
        height="80px"
      >
        <desc id="catDesc">Ilustração de uma logo que representa o fogo</desc>
        <path
          d="M931 2550c5 0 50-304 99-406 50-103 119-205 269-399 165-212 230-299 289-386 286-426 300-788 42-1050-82-83-260-201-260-171 0 4 9 53 20 110 36 184 24 334-36 457-25 51-96 146-114 153-5 2-299.298-366.05-324-338-20.32 23.074 82.695 542.319 37.376 531.472C929.317 1045.714 807 1009 660 860 479 678 428 573 429 380c0-96 30-229 66-301 14-26 14-28-2-22-10 3-53 27-97 52-442 259-372.448 906.416-93 1371 32.309 53.714 70 95 77 95s30-31 50-68 50-81 66-98c28-29 98-58 111-46 15 16-1 143-35 272-30 113-37 158-37 235 0 88 3 101 36 178 46 104 108 211 164 286s184 216 196 216Z"
          style={{
            fill: "#1e70ff",
          }}
          transform="matrix(.1 0 0 -.1 0 261)"
        />
      </svg>
    </div>
  </Grid>
);
