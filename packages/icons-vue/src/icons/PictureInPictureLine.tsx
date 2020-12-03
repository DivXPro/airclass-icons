// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PictureInPictureLineSvg from '@airclass/icons-svg/lib/asn/PictureInPictureLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PictureInPictureLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PictureInPictureLineSvg}></AntdIcon>;
};

PictureInPictureLine.displayName = 'PictureInPictureLine';
PictureInPictureLine.inheritAttrs = false;
export default PictureInPictureLine;