// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AccountBoxLineSvg from '@airclass/icons-svg/lib/asn/AccountBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AccountBoxLineSvg}></AntdIcon>;
};

AccountBoxLine.displayName = 'AccountBoxLine';
AccountBoxLine.inheritAttrs = false;
export default AccountBoxLine;