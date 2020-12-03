// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CopyleftFillSvg from '@airclass/icons-svg/lib/asn/CopyleftFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyleftFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyleftFillSvg}></AntdIcon>;
};

CopyleftFill.displayName = 'CopyleftFill';
CopyleftFill.inheritAttrs = false;
export default CopyleftFill;