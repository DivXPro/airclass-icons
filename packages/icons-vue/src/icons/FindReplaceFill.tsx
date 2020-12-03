// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FindReplaceFillSvg from '@airclass/icons-svg/lib/asn/FindReplaceFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FindReplaceFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FindReplaceFillSvg}></AntdIcon>;
};

FindReplaceFill.displayName = 'FindReplaceFill';
FindReplaceFill.inheritAttrs = false;
export default FindReplaceFill;