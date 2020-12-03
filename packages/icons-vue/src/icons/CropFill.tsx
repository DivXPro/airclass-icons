// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CropFillSvg from '@airclass/icons-svg/lib/asn/CropFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CropFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CropFillSvg}></AntdIcon>;
};

CropFill.displayName = 'CropFill';
CropFill.inheritAttrs = false;
export default CropFill;