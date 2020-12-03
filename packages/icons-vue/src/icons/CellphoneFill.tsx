// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CellphoneFillSvg from '@airclass/icons-svg/lib/asn/CellphoneFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CellphoneFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CellphoneFillSvg}></AntdIcon>;
};

CellphoneFill.displayName = 'CellphoneFill';
CellphoneFill.inheritAttrs = false;
export default CellphoneFill;