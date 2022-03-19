import { Button, Grid, Input, Avatar } from "@mui/material";
import { useErrors } from "hooks/useErrors";
import { useRef } from "react";
import AvatarEditor from "react-avatar-editor";

export const SelectImage = ({ file, setFile }) => {
  const editorRef = useRef();
  const { openSnackbarError } = useErrors();

  const updateFileData = (fileData, isStrict) => {
    if (fileData.size > 1500 && isStrict) {
      return openSnackbarError({ code: "custom/big-file-size" });
    }

    setFile({
      original: fileData,
    });

    setTimeout(() => {
      const base64File = editorRef?.current
        ?.getImageScaledToCanvas()
        .toDataURL();

      setFile({
        original: fileData,
        cropped: base64File,
      });
    }, 300);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} display="flex" justifyContent="center">
        {!file ? (
          <Avatar
            alt="Avatar"
            style={{ width: 90, height: 90, border: "solid 1px white" }}
          />
        ) : (
          <AvatarEditor
            style={{
              borderRadius: "50%",
              border: "solid 1px white",
            }}
            image={file}
            ref={editorRef}
            width={90}
            height={90}
            border={1}
            scale={1}
            borderRadius={50}
            color={[255, 255, 255, 0.6]}
            onPositionChange={() => updateFileData(file)}
          />
        )}
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <label htmlFor="contained-button-file">
          <Input
            style={{ display: "none" }}
            onChange={({ target }) => updateFileData(target.files[0], true)}
            id="contained-button-file"
            inputProps={{ accept: "image/*" }}
            type="file"
          />

          <Button size="small" disableRipple component="span">
            alterar imagem
          </Button>
        </label>
      </Grid>
    </Grid>
  );
};
