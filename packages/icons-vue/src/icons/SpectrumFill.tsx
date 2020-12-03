// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpectrumFillSvg from '@airclass/icons-svg/lib/asn/SpectrumFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpectrumFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpectrumFillSvg}></AntdIcon>;
};

SpectrumFill.displayName = 'SpectrumFill';
SpectrumFill.inheritAttrs = false;
export default SpectrumFill;