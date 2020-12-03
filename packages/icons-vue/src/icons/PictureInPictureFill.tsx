// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PictureInPictureFillSvg from '@airclass/icons-svg/lib/asn/PictureInPictureFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PictureInPictureFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PictureInPictureFillSvg}></AntdIcon>;
};

PictureInPictureFill.displayName = 'PictureInPictureFill';
PictureInPictureFill.inheritAttrs = false;
export default PictureInPictureFill;