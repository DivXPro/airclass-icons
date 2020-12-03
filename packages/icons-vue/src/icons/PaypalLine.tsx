// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PaypalLineSvg from '@airclass/icons-svg/lib/asn/PaypalLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PaypalLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaypalLineSvg}></AntdIcon>;
};

PaypalLine.displayName = 'PaypalLine';
PaypalLine.inheritAttrs = false;
export default PaypalLine;