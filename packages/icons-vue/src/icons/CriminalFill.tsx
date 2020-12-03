// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CriminalFillSvg from '@airclass/icons-svg/lib/asn/CriminalFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CriminalFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CriminalFillSvg}></AntdIcon>;
};

CriminalFill.displayName = 'CriminalFill';
CriminalFill.inheritAttrs = false;
export default CriminalFill;