// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FinderFillSvg from '@airclass/icons-svg/lib/asn/FinderFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FinderFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FinderFillSvg}></AntdIcon>;
};

FinderFill.displayName = 'FinderFill';
FinderFill.inheritAttrs = false;
export default FinderFill;