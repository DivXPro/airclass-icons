// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BehanceLineSvg from '@airclass/icons-svg/lib/asn/BehanceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BehanceLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BehanceLineSvg}></AntdIcon>;
};

BehanceLine.displayName = 'BehanceLine';
BehanceLine.inheritAttrs = false;
export default BehanceLine;