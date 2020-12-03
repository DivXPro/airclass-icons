// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PixelfedFillSvg from '@airclass/icons-svg/lib/asn/PixelfedFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PixelfedFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PixelfedFillSvg}></AntdIcon>;
};

PixelfedFill.displayName = 'PixelfedFill';
PixelfedFill.inheritAttrs = false;
export default PixelfedFill;