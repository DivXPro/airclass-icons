// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TrelloFillSvg from '@airclass/icons-svg/lib/asn/TrelloFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrelloFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrelloFillSvg}></AntdIcon>;
};

TrelloFill.displayName = 'TrelloFill';
TrelloFill.inheritAttrs = false;
export default TrelloFill;