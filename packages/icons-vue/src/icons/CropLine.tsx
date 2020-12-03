// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CropLineSvg from '@airclass/icons-svg/lib/asn/CropLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CropLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CropLineSvg}></AntdIcon>;
};

CropLine.displayName = 'CropLine';
CropLine.inheritAttrs = false;
export default CropLine;