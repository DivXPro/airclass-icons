// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MastodonLineSvg from '@airclass/icons-svg/lib/asn/MastodonLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MastodonLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MastodonLineSvg}></AntdIcon>;
};

MastodonLine.displayName = 'MastodonLine';
MastodonLine.inheritAttrs = false;
export default MastodonLine;