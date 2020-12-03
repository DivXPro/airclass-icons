// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Ship2FillSvg from '@airclass/icons-svg/lib/asn/Ship2Fill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Ship2Fill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ship2FillSvg}></AntdIcon>;
};

Ship2Fill.displayName = 'Ship2Fill';
Ship2Fill.inheritAttrs = false;
export default Ship2Fill;