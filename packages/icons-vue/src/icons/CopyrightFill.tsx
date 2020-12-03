// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CopyrightFillSvg from '@airclass/icons-svg/lib/asn/CopyrightFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyrightFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyrightFillSvg}></AntdIcon>;
};

CopyrightFill.displayName = 'CopyrightFill';
CopyrightFill.inheritAttrs = false;
export default CopyrightFill;