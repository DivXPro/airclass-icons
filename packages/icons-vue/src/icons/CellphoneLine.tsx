// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CellphoneLineSvg from '@airclass/icons-svg/lib/asn/CellphoneLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CellphoneLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CellphoneLineSvg}></AntdIcon>;
};

CellphoneLine.displayName = 'CellphoneLine';
CellphoneLine.inheritAttrs = false;
export default CellphoneLine;