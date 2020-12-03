// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitPullRequestLineSvg from '@airclass/icons-svg/lib/asn/GitPullRequestLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitPullRequestLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitPullRequestLineSvg}></AntdIcon>;
};

GitPullRequestLine.displayName = 'GitPullRequestLine';
GitPullRequestLine.inheritAttrs = false;
export default GitPullRequestLine;