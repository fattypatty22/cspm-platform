import { useState } from 'react';

// ── COLOR SYSTEM ──────────────────────────────────────────────────────────────
const T = {
  // Teal theme
  bg: '#080F0F',
  surface: '#0C1A1A',
  card: '#102020',
  border: '#1E5C5C',
  borderLight: '#2A7A7A',
  accent: '#2A9090',
  hi: '#F5E642',
  hiDeep: '#C9B800',
  text: '#E8F8F8',
  textSub: '#7ABABA',
  textDim: '#3A6A6A',
  a: '#0D2020',
  b: '#102828',
  c: '#101800',
  d: '#0A1A00',
};
const N = {
  // Navy theme
  bg: '#060A14',
  surface: '#0A1020',
  card: '#0E1830',
  border: '#1E3A70',
  borderLight: '#2A4A80',
  hi: '#F0A500',
  hiDeep: '#B07800',
  text: '#EEF4FF',
  textSub: '#7A9ACC',
  textDim: '#2A3A60',
  a: '#080E20',
  b: '#0C1830',
  c: '#100C00',
  d: '#140E00',
};

// ── SHARED UI ─────────────────────────────────────────────────────────────────
const col = (bg, bdr, txt = '#EEF4FF') => ({
  background: bg,
  border: `1.5px solid ${bdr}`,
  color: txt,
});

function Node({ icon, title, sub, pill, s, style = {} }) {
  // s = style object {bg,bdr}
  return (
    <div
      style={{
        ...col(s.bg, s.bdr),
        borderRadius: 8,
        padding: '8px 10px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 64,
        position: 'relative',
        boxShadow: '0 2px 10px #00000044',
        ...style,
      }}
    >
      {pill && (
        <div
          style={{
            position: 'absolute',
            top: 3,
            left: '50%',
            transform: 'translateX(-50%)',
            background: s.pillBg || '#333',
            borderRadius: 8,
            padding: '1px 8px',
            fontSize: 7,
            fontWeight: 700,
            color: s.pillTxt || '#fff',
            whiteSpace: 'nowrap',
          }}
        >
          {pill}
        </div>
      )}
      {icon && (
        <div
          style={{ fontSize: 15, marginBottom: 2, marginTop: pill ? 10 : 0 }}
        >
          {icon}
        </div>
      )}
      <div
        style={{
          fontSize: 9.5,
          fontWeight: 700,
          color: s.text || '#EEF4FF',
          lineHeight: 1.4,
        }}
      >
        {title}
      </div>
      {sub && (
        <div
          style={{
            fontSize: 7.5,
            color: s.sub || '#8AABCC',
            marginTop: 2,
            lineHeight: 1.3,
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}

function Down({ label, color = '#F0A500', dashed }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1px 0',
      }}
    >
      {label && (
        <div
          style={{
            fontSize: 7,
            color: '#7A9ACC',
            marginBottom: 1,
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </div>
      )}
      <div
        style={{
          width: 2,
          height: 16,
          background: dashed
            ? `repeating-linear-gradient(to bottom,${color} 0,${color} 4px,transparent 4px,transparent 7px)`
            : color,
        }}
      />
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: '4px solid transparent',
          borderRight: '4px solid transparent',
          borderTop: `6px solid ${color}`,
        }}
      />
    </div>
  );
}

function Right({ label, color = '#F0A500', dashed }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      {label && (
        <div style={{ fontSize: 7, color: '#7ABABA', whiteSpace: 'nowrap' }}>
          {label}
        </div>
      )}
      <div
        style={{
          height: 2,
          width: 18,
          background: dashed
            ? `repeating-linear-gradient(to right,${color} 0,${color} 4px,transparent 4px,transparent 7px)`
            : color,
        }}
      />
      <div
        style={{
          width: 0,
          height: 0,
          borderTop: '4px solid transparent',
          borderBottom: '4px solid transparent',
          borderLeft: `6px solid ${color}`,
        }}
      />
    </div>
  );
}

function Zone({ label, color, bg, children, style = {} }) {
  return (
    <div
      style={{
        border: `1.5px dashed ${color}`,
        borderRadius: 10,
        padding: '10px',
        background: bg || 'transparent',
        position: 'relative',
        ...style,
      }}
    >
      <div
        style={{
          fontSize: 7.5,
          fontWeight: 800,
          color,
          letterSpacing: '0.8px',
          textAlign: 'center',
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

function Tip({ text, color }) {
  return (
    <div
      style={{
        background: '#0C1020',
        borderRadius: 8,
        padding: '7px 14px',
        marginBottom: 12,
        border: `1px solid ${color}`,
        display: 'flex',
        gap: 8,
        alignItems: 'center',
      }}
    >
      <span style={{ color, fontSize: 10, fontWeight: 700 }}>ℹ</span>
      <span style={{ color: '#8AABCC', fontSize: 10 }}>{text}</span>
    </div>
  );
}

function Grid({ cols, gap = 10, children, style = {} }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols},1fr)`,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Col({ children, gap = 8 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap }}>
      {children}
    </div>
  );
}

function Center({ children }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>{children}</div>
  );
}

// ── TEAL NODE STYLES ──────────────────────────────────────────────────────────
const TS = {
  ingest: {
    bg: T.a,
    bdr: T.borderLight,
    text: T.text,
    sub: T.textSub,
    pillBg: T.borderLight,
    pillTxt: T.hi,
  },
  process: {
    bg: T.b,
    bdr: T.accent,
    text: T.text,
    sub: T.textSub,
    pillBg: T.accent,
    pillTxt: T.hi,
  },
  intel: {
    bg: T.c,
    bdr: T.hiDeep,
    text: T.text,
    sub: T.textSub,
    pillBg: T.hiDeep,
    pillTxt: '#fff',
  },
  output: {
    bg: T.d,
    bdr: T.hi,
    text: T.text,
    sub: T.textSub,
    pillBg: '#2A3A00',
    pillTxt: T.hi,
  },
  ext: { bg: T.a, bdr: T.border, text: T.text, sub: T.textSub },
};

// ── NAVY NODE STYLES ──────────────────────────────────────────────────────────
const NS = {
  peri: {
    bg: '#101E40',
    bdr: N.hi,
    text: N.text,
    sub: N.textSub,
    pillBg: N.hiDeep,
    pillTxt: '#fff',
  },
  core: { bg: N.b, bdr: N.borderLight, text: N.text, sub: N.textSub },
  data: {
    bg: N.c,
    bdr: N.hiDeep,
    text: N.text,
    sub: N.textSub,
    pillBg: N.hiDeep,
    pillTxt: '#fff',
  },
  audit: { bg: N.d, bdr: '#8A6000', text: N.text, sub: N.textSub },
  ext: { bg: N.a, bdr: N.border, text: N.text, sub: N.textSub },
  gov: {
    bg: '#101E40',
    bdr: N.hi,
    text: N.text,
    sub: N.textSub,
    pillBg: N.hiDeep,
    pillTxt: '#fff',
  },
};

// ════════════════════════════════════════════════════════════════════════════
// DIAGRAM 1 — SYSTEM ARCHITECTURE
// ════════════════════════════════════════════════════════════════════════════
function SystemArch() {
  return (
    <div>
      <Tip
        text="System Architecture — 4 horizontal layers: Ingestion → Processing → Intelligence → Output"
        color={T.accent}
      />
      <Zone
        label="☁  AWS CLOUD ENVIRONMENT"
        color={T.accent}
        bg={`${T.accent}08`}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 50px 1fr 50px 1fr 50px 1fr',
            alignItems: 'center',
            gap: 0,
          }}
        >
          {/* INGESTION */}
          <Zone label="INGESTION LAYER" color={T.borderLight}>
            <Col>
              <Node
                icon="📡"
                title="Data Ingestion Layer"
                sub="CloudWatch Events"
                s={TS.ingest}
                pill="INGEST"
              />
              <Node
                icon="⚙️"
                title="AWS Config"
                sub="Resource Snapshots"
                s={TS.ingest}
              />
              <Node
                icon="📋"
                title="CloudTrail"
                sub="API Audit Logs"
                s={TS.ingest}
              />
              <Node
                icon="🛡️"
                title="Security Hub"
                sub="Aggregated Findings"
                s={TS.ingest}
              />
            </Col>
          </Zone>

          <Col gap={18}>
            <Right label="events" color={T.hi} />
            <Right color={T.hi} />
            <Right label="logs" color={T.hi} />
            <Right color={T.hi} />
          </Col>

          {/* PROCESSING */}
          <Zone label="PROCESSING ENGINES" color={T.accent}>
            <Col>
              <Node
                icon="✅"
                title="Compliance Engine"
                sub="CIS / NIST / SOC2"
                s={TS.process}
                pill="PROCESS"
              />
              <Node
                icon="📊"
                title="Risk Assessment"
                sub="CVSS Scoring Engine"
                s={TS.process}
                pill="PROCESS"
              />
              <Node
                icon="🔧"
                title="Auto Remediation"
                sub="Lambda + SSM"
                s={TS.process}
                pill="PROCESS"
              />
            </Col>
          </Zone>

          <Col gap={18}>
            <Right label="findings" color={T.hi} />
            <Right label="scores" color={T.hi} />
            <Right label="actions" color={T.hi} />
          </Col>

          {/* INTELLIGENCE */}
          <Zone label="INTELLIGENCE" color={T.borderLight}>
            <Col>
              <Node
                icon="🧠"
                title="AI / ML Engine"
                sub="SageMaker Anomaly"
                s={TS.intel}
                pill="INTEL"
              />
              <Node
                icon="🗄️"
                title="Data Store"
                sub="S3 + DynamoDB"
                s={TS.intel}
                pill="STORE"
              />
            </Col>
          </Zone>

          <Col gap={18}>
            <Right label="insights" color={T.hi} />
            <Right label="alerts" color={T.hi} />
          </Col>

          {/* OUTPUT */}
          <Zone label="OUTPUT LAYER" color={T.borderLight}>
            <Col>
              <Node
                icon="📈"
                title="Dashboard"
                sub="QuickSight / UI"
                s={TS.output}
                pill="OUTPUT"
              />
              <Node
                icon="🚨"
                title="SIEM Integration"
                sub="CloudWatch / Splunk"
                s={TS.output}
              />
              <Node
                icon="🎫"
                title="Ticketing"
                sub="Jira / ServiceNow"
                s={TS.output}
              />
            </Col>
          </Zone>
        </div>
      </Zone>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// DIAGRAM 2 — NETWORK DIAGRAM
// ════════════════════════════════════════════════════════════════════════════
function NetworkDiag() {
  return (
    <div>
      <Tip
        text="Network Diagram — VPC topology with public, private, and isolated subnets."
        color={T.accent}
      />
      <Center>
        <Node
          icon="🌐"
          title="Internet"
          sub="External Traffic"
          s={TS.ext}
          style={{ width: 160 }}
        />
      </Center>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 60 }}>
        <Down label="WAF" color={T.hi} />
        <Down label="HTTPS/443" color={T.hi} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 12,
          marginBottom: 4,
        }}
      >
        <Node
          icon="🧱"
          title="AWS WAF"
          sub="Layer 7 Filtering"
          s={TS.process}
          style={{ width: 150 }}
        />
        <Node
          icon="🔀"
          title="Internet Gateway"
          sub="Entry Point"
          s={TS.ingest}
          style={{ width: 150 }}
        />
      </div>
      <Center>
        <Down label="to ALB" color={T.hi} />
      </Center>
      <Center>
        <Node
          icon="⚖️"
          title="Application Load Balancer"
          sub="Traffic Distribution"
          s={TS.process}
          style={{ width: 260 }}
        />
      </Center>
      <Center>
        <Down label="route" color={T.hi} />
      </Center>

      <Zone
        label="🏢  AWS VPC — 10.0.0.0/16"
        color={T.accent}
        bg={`${T.accent}08`}
      >
        <Grid cols={3} gap={12}>
          <Zone label="PUBLIC SUBNET — 10.0.1.0/24" color={T.borderLight}>
            <Col>
              <Node
                icon="🔁"
                title="NAT Gateway"
                sub="Outbound Traffic"
                s={TS.ingest}
              />
              <Node
                icon="🔐"
                title="VPN Gateway"
                sub="Secure Tunnel"
                s={TS.ingest}
              />
              <Node
                icon="🏰"
                title="Bastion Host"
                sub="Admin Access"
                s={TS.ingest}
              />
              <Node
                icon="👁️"
                title="GuardDuty"
                sub="Threat Detection"
                s={TS.process}
              />
            </Col>
          </Zone>
          <Zone label="PRIVATE SUBNET — 10.0.2.0/24" color={T.accent}>
            <Col>
              <Node
                icon="🛡️"
                title="CSPM Engine"
                sub="EC2 + EKS"
                s={TS.process}
              />
              <Node
                icon="⚡"
                title="Lambda"
                sub="Remediation Functions"
                s={TS.process}
              />
              <Node
                icon="🗄️"
                title="RDS Aurora"
                sub="Compliance DB"
                s={TS.intel}
              />
            </Col>
          </Zone>
          <Zone label="ISOLATED SUBNET — 10.0.3.0/24" color={T.hiDeep}>
            <Col>
              <Node
                icon="📊"
                title="Security Hub"
                sub="Findings Aggregation"
                s={TS.output}
              />
              <Node
                icon="🧠"
                title="SageMaker"
                sub="ML Risk Model"
                s={TS.output}
              />
              <Node
                icon="🔑"
                title="Secrets Manager"
                sub="KMS Encrypted"
                s={TS.intel}
              />
            </Col>
          </Zone>
        </Grid>
      </Zone>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// DIAGRAM 3 — DATA FLOW DIAGRAM
// ════════════════════════════════════════════════════════════════════════════
function DFDiag() {
  const [lv, setLv] = useState(0);
  return (
    <div>
      <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
        {['Level 0 — Context DFD', 'Level 1 — Detailed DFD'].map((l, i) => (
          <button
            key={i}
            onClick={() => setLv(i)}
            style={{
              padding: '7px 18px',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 10,
              cursor: 'pointer',
              border: `1.5px solid ${lv === i ? T.hi : T.border}`,
              background: lv === i ? '#1A3000' : T.card,
              color: lv === i ? T.hi : T.textSub,
            }}
          >
            {l}
          </button>
        ))}
      </div>

      {lv === 0 ? (
        <div>
          <div
            style={{
              textAlign: 'center',
              fontSize: 13,
              fontWeight: 700,
              color: T.hi,
              marginBottom: 16,
            }}
          >
            Level 0 — Context DFD: AWS CSPM Platform
          </div>
          <Grid cols={5} gap={8} style={{ alignItems: 'center' }}>
            <Node
              icon="👤"
              title="Security Admin"
              sub="External Entity"
              s={TS.ext}
            />
            <Col gap={10}>
              <Right label="Policies / Config" color={T.hi} />
              <Right label="Reports / Alerts" color={T.borderLight} dashed />
            </Col>
            <Node
              icon="🛡️"
              title="CSPM Platform"
              sub="Central Process"
              s={TS.process}
              pill="CORE"
            />
            <Col gap={10}>
              <Right label="Resource Data" color={T.hi} />
              <Right label="Remediation Cmds" color={T.borderLight} dashed />
            </Col>
            <Node
              icon="☁️"
              title="AWS Resources"
              sub="External Entity"
              s={TS.ext}
            />
          </Grid>
          <Center style={{ marginTop: 8, flexDirection: 'column' }}>
            <Down label="Alerts / Tickets" color={T.hi} />
            <Node
              icon="🔗"
              title="SIEM / Ticketing"
              sub="External System"
              s={TS.ext}
              style={{ width: 200 }}
            />
          </Center>
          <div
            style={{
              marginTop: 10,
              textAlign: 'center',
              fontSize: 8,
              color: T.textDim,
            }}
          >
            Solid lines = data in · Dashed lines = data out / commands
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              textAlign: 'center',
              fontSize: 13,
              fontWeight: 700,
              color: T.hi,
              marginBottom: 16,
            }}
          >
            Level 1 — Detailed DFD: AWS CSPM Platform
          </div>
          <Grid cols={7} gap={8} style={{ alignItems: 'start' }}>
            <Col>
              <Node
                icon="☁️"
                title="AWS Services"
                sub="EC2 / S3 / IAM"
                s={TS.ext}
              />
              <Node
                icon="👤"
                title="Sec Admin"
                sub="External Entity"
                s={TS.ext}
                style={{ marginTop: 8 }}
              />
            </Col>
            <Col gap={20} style={{ paddingTop: 16 }}>
              <Right label="telemetry" color={T.hi} />
              <Right label="reports" color={T.borderLight} dashed />
            </Col>
            <Col>
              <Node
                icon="📡"
                title="P1: Ingest & Collect"
                sub="CloudTrail / Config"
                s={TS.process}
              />
              <Node
                icon="✅"
                title="P2: Compliance Check"
                sub="Rules Engine"
                s={TS.process}
                style={{ marginTop: 8 }}
              />
              <Node
                icon="📊"
                title="P3: Risk Scoring"
                sub="CVSS + ML Model"
                s={TS.process}
                style={{ marginTop: 8 }}
              />
            </Col>
            <Col gap={20} style={{ paddingTop: 8 }}>
              <Right label="findings" color={T.hi} />
              <Right label="violations" color={T.hi} />
              <Right label="high-risk" color={T.hi} />
            </Col>
            <Col>
              <Node
                icon="🗄️"
                title="D1: Rules DB"
                sub="DynamoDB"
                s={TS.intel}
              />
              <Node
                icon="🪣"
                title="D2: Findings Store"
                sub="S3 Data Lake"
                s={TS.intel}
                style={{ marginTop: 8 }}
              />
              <Node
                icon="🔧"
                title="P4: Auto Remediate"
                sub="Lambda / SSM"
                s={TS.output}
                style={{ marginTop: 8 }}
              />
            </Col>
            <Col gap={20} style={{ paddingTop: 8 }}>
              <Right label="scores" color={T.hi} />
              <Right label="alerts" color={T.hi} />
            </Col>
            <Col>
              <Node
                icon="📈"
                title="P5: Report & Alert"
                sub="QuickSight / SNS"
                s={TS.output}
              />
              <Node
                icon="🚨"
                title="SIEM"
                sub="Splunk"
                s={TS.ext}
                style={{ marginTop: 8 }}
              />
              <Node
                icon="🎫"
                title="Ticketing"
                sub="Jira"
                s={TS.ext}
                style={{ marginTop: 8 }}
              />
            </Col>
          </Grid>
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// DIAGRAM 4 — PROCESS FLOW
// ════════════════════════════════════════════════════════════════════════════
function ProcessFlow() {
  return (
    <div>
      <Tip
        text="Process Flow — complete automated remediation workflow from trigger to resolution."
        color={N.hi}
      />
      <div
        style={{
          background: N.bg,
          borderRadius: 12,
          border: `1.5px solid ${N.border}`,
          padding: '20px 16px',
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: N.hi,
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          Process Flow — CSPM Automated Remediation Workflow
        </div>

        <Center>
          <Node
            icon="⚡"
            title="Trigger Event"
            sub="Scheduled / CloudWatch / API"
            pill="▶ START"
            s={NS.gov}
            style={{ width: 220 }}
          />
        </Center>
        <Center>
          <Down label="trigger" color={N.hi} />
        </Center>
        <Center>
          <Node
            icon="🔍"
            title="Cloud Config Scan"
            sub="Prowler · Scout Suite · AWS Config"
            s={NS.core}
            style={{ width: 270 }}
          />
        </Center>
        <Center>
          <Down label="raw findings" color={N.hi} />
        </Center>
        <Center>
          <Node
            icon="📋"
            title="Finding Classifier"
            sub="Severity · Type · Priority"
            s={NS.data}
            style={{ width: 270 }}
          />
        </Center>

        {/* Fan out */}
        <Center>
          <div style={{ width: 2, height: 14, background: N.hi }} />
        </Center>
        <div style={{ height: 2, background: N.hi, margin: '0 80px' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 80px',
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ width: 2, height: 14, background: N.hi }} />
          ))}
        </div>

        <Grid cols={4} gap={10} style={{ margin: '0 10px' }}>
          <Node
            icon="✅"
            title="Compliance Check"
            sub="CIS / NIST / ISO 27001"
            s={NS.core}
          />
          <Node
            icon="📊"
            title="Risk Scoring"
            sub="CVSS + FAIR Model"
            s={NS.core}
          />
          <Node
            icon="🔧"
            title="Auto Remediation"
            sub="Lambda / Ansible"
            s={NS.core}
          />
          <Node
            icon="✍️"
            title="Approval Workflow"
            sub="Change Management"
            s={NS.core}
          />
        </Grid>
        <Grid cols={4} gap={10} style={{ margin: '0 10px' }}>
          {[0, 1, 2, 3].map((i) => (
            <Center key={i}>
              <Down color={N.hi} />
            </Center>
          ))}
        </Grid>
        <Grid cols={4} gap={10} style={{ margin: '0 10px' }}>
          <Node
            icon="📄"
            title="Compliance Report"
            sub="Audit Evidence"
            s={NS.data}
          />
          <Node
            icon="🎯"
            title="Risk Dashboard"
            sub="Prioritized List"
            s={NS.data}
          />
          <Node
            icon="🔁"
            title="Self-Healing Action"
            sub="Auto rollback / fix"
            s={NS.data}
          />
          <Node
            icon="📁"
            title="Change Mgmt Record"
            sub="ITSM / ServiceNow"
            s={NS.data}
          />
        </Grid>

        {/* Converge */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '2px 80px 0',
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{ width: 2, height: 14, background: N.borderLight }}
            />
          ))}
        </div>
        <div
          style={{ height: 2, background: N.borderLight, margin: '0 80px' }}
        />
        <Center>
          <div style={{ width: 2, height: 14, background: N.borderLight }} />
        </Center>
        <Center>
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: `7px solid ${N.borderLight}`,
            }}
          />
        </Center>

        <Center>
          <Node
            icon="🔔"
            title="Notify & Alert"
            sub="SNS · Slack · PagerDuty"
            s={NS.gov}
            style={{ width: 220, marginTop: 4 }}
          />
        </Center>
        <Center>
          <Down color={N.hi} />
        </Center>
        <Center>
          <Node
            icon="✅"
            title="Finding Closed"
            sub="Ticket resolved & logged"
            pill="■ END"
            s={NS.gov}
            style={{ width: 220 }}
          />
        </Center>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// DIAGRAM 5 — SECURITY ARCHITECTURE
// ════════════════════════════════════════════════════════════════════════════
function SecurityArch() {
  return (
    <div>
      <Tip
        text="Security Architecture — defense-in-depth with 4 trust zones."
        color={N.hi}
      />
      <div
        style={{
          background: N.bg,
          borderRadius: 12,
          border: `1.5px solid ${N.border}`,
          padding: '20px 16px',
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: N.hi,
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          Security Architecture — Defense-in-Depth CSPM
        </div>

        <Zone label="LAYER 1 — PERIMETER" color={N.hi} bg={`${N.hi}08`}>
          <Grid cols={3} gap={10}>
            <Node
              icon="🧱"
              title="AWS WAF"
              sub="Layer 7 Filtering"
              s={NS.peri}
            />
            <Node
              icon="🛡️"
              title="AWS Shield"
              sub="DDoS Protection"
              s={NS.peri}
            />
            <Node
              icon="🌐"
              title="CloudFront CDN"
              sub="Edge Security"
              s={NS.peri}
            />
          </Grid>
        </Zone>
        <Center>
          <Down label="filtered traffic" color={N.hi} />
        </Center>

        <Grid cols={3} gap={10} style={{ marginBottom: 4 }}>
          <Zone label="LAYER 2 — IDENTITY & ACCESS" color={N.borderLight}>
            <Col>
              <Node icon="👤" title="IAM" sub="Least Privilege" s={NS.core} />
              <Node
                icon="🔐"
                title="MFA"
                sub="Enforced All Users"
                s={NS.core}
              />
              <Node icon="🔑" title="SSO" sub="SAML / OIDC" s={NS.core} />
            </Col>
          </Zone>

          <Zone
            label="LAYER 2 — CSPM CORE ENGINE"
            color={N.hi}
            bg={`${N.hi}06`}
          >
            <Node
              icon="🛡️"
              title="CSPM Core Engine"
              sub="Continuous Posture Assessment · Policy Enforcement · Risk Scoring"
              s={NS.gov}
              pill="CORE"
              style={{ marginBottom: 8 }}
            />
            <Grid cols={2} gap={8}>
              <Node icon="📡" title="SIEM" sub="Log Correlation" s={NS.core} />
              <Node icon="⚡" title="SOAR" sub="Auto Response" s={NS.core} />
              <Node
                icon="👁️"
                title="GuardDuty"
                sub="Threat Detection"
                s={NS.core}
              />
              <Node
                icon="🔬"
                title="Inspector"
                sub="Vulnerability Scan"
                s={NS.core}
              />
            </Grid>
          </Zone>

          <Zone label="LAYER 2 — DATA PROTECTION" color={N.borderLight}>
            <Col>
              <Node
                icon="🔒"
                title="AWS KMS"
                sub="Key Management"
                s={NS.core}
              />
              <Node
                icon="🔎"
                title="Macie"
                sub="Data Classification"
                s={NS.core}
              />
              <Node
                icon="🗝️"
                title="Secrets Manager"
                sub="Encrypted Secrets"
                s={NS.core}
              />
            </Col>
          </Zone>
        </Grid>
        <Center>
          <Down label="findings" color={N.hi} />
        </Center>

        <Zone
          label="LAYER 3 — COMPLIANCE & AUDIT"
          color={N.hiDeep}
          bg={`${N.hiDeep}08`}
        >
          <Grid cols={4} gap={10}>
            <Node
              icon="⚙️"
              title="AWS Config"
              sub="Drift Detection"
              s={NS.audit}
            />
            <Node
              icon="📊"
              title="Security Hub"
              sub="Findings Aggregation"
              s={NS.audit}
            />
            <Node
              icon="📋"
              title="CloudTrail"
              sub="API Audit Logs"
              s={NS.audit}
            />
            <Node
              icon="📁"
              title="Audit Logs"
              sub="S3 + Glacier Archive"
              s={NS.audit}
            />
          </Grid>
        </Zone>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// DIAGRAM 6 — CLOUD / HYBRID / ON-PREM
// ════════════════════════════════════════════════════════════════════════════
function CloudHybrid() {
  const AWS = '#FF9900',
    AZ = '#0078D4',
    GCP = '#34A853',
    OP = N.borderLight;
  return (
    <div>
      <Tip
        text="Cloud / Hybrid / On-Prem — 4 environments unified under one governance layer."
        color={N.hi}
      />
      <div
        style={{
          background: N.bg,
          borderRadius: 12,
          border: `1.5px solid ${N.border}`,
          padding: '20px 16px',
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: N.hi,
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          Cloud / Hybrid / On-Prem Architecture — CSPM
        </div>

        <Grid cols={4} gap={10} style={{ marginBottom: 6 }}>
          <Zone label="ON-PREMISES" color={OP}>
            <Col>
              <Node
                icon="🏢"
                title="Data Center"
                sub="Physical Infra"
                s={{ bg: N.a, bdr: OP, text: N.text, sub: N.textSub }}
              />
              <Node
                icon="🖥️"
                title="On-Prem CSPM"
                sub="Wazuh / Nessus"
                s={{ bg: N.a, bdr: OP, text: N.text, sub: N.textSub }}
              />
              <Node
                icon="🗄️"
                title="Legacy Systems"
                sub="SIEM Agent"
                s={{ bg: N.a, bdr: OP, text: N.text, sub: N.textSub }}
              />
            </Col>
          </Zone>
          <Zone label="AWS CLOUD" color={AWS} bg={`${AWS}08`}>
            <Col>
              <Node
                icon="☁️"
                title="Security Hub"
                sub="Config + CloudTrail"
                s={{ bg: N.b, bdr: AWS, text: N.text, sub: N.textSub }}
              />
              <Node
                icon="⚡"
                title="Lambda"
                sub="Auto Remediation"
                s={{ bg: N.b, bdr: AWS, text: N.text, sub: N.textSub }}
              />
              <Node
                icon="🪣"
                title="S3 Data Lake"
                sub="Findings Store"
                s={{ bg: N.b, bdr: AWS, text: N.text, sub: N.textSub }}
              />
            </Col>
          </Zone>
          <Zone label="AZURE" color={AZ} bg={`${AZ}08`}>
            <Col>
              <Node
                icon="📋"
                title="Azure Policy"
                sub="Compliance Rules"
                s={{ bg: N.b, bdr: AZ, text: N.text, sub: N.textSub }}
              />
              <Node
                icon="🔍"
                title="Sentinel SIEM"
                sub="Log Analytics"
                s={{ bg: N.b, bdr: AZ, text: N.text, sub: N.textSub }}
              />
              <Node
                icon="👤"
                title="Azure AD"
                sub="Identity & Access"
                s={{ bg: N.b, bdr: AZ, text: N.text, sub: N.textSub }}
              />
            </Col>
          </Zone>
          <Zone label="GCP" color={GCP} bg={`${GCP}08`}>
            <Col>
              <Node
                icon="🛡️"
                title="Sec Command Ctr"
                sub="Posture Management"
                s={{ bg: N.b, bdr: GCP, text: N.text, sub: N.textSub }}
              />
              <Node
                icon="📊"
                title="BigQuery"
                sub="Risk Analytics"
                s={{ bg: N.b, bdr: GCP, text: N.text, sub: N.textSub }}
              />
              <Node
                icon="📡"
                title="Chronicle SIEM"
                sub="Threat Intelligence"
                s={{ bg: N.b, bdr: GCP, text: N.text, sub: N.textSub }}
              />
            </Col>
          </Zone>
        </Grid>

        <Grid cols={4} gap={10} style={{ margin: '0 10px 4px' }}>
          {[
            ['tunnel / VPN', OP, true],
            ['findings', N.hi, false],
            ['findings', N.hi, false],
            ['findings', N.hi, false],
          ].map(([l, c, d], i) => (
            <Center key={i}>
              <Down label={l} color={c} dashed={d} />
            </Center>
          ))}
        </Grid>

        <Zone
          label="UNIFIED CSPM GOVERNANCE LAYER"
          color={N.hi}
          bg={`${N.hi}08`}
        >
          <Grid cols={4} gap={8}>
            <Node
              icon="🔒"
              title="Cloud Custodian"
              sub="Policy as Code"
              s={NS.gov}
            />
            <Node
              icon="📜"
              title="Open Policy Agent"
              sub="OPA Rules Engine"
              s={NS.gov}
            />
            <Node icon="🏗️" title="Terraform" sub="IaC Automation" s={NS.gov} />
            <Node
              icon="🔗"
              title="REST APIs"
              sub="Multi-cloud SDKs"
              s={NS.gov}
            />
          </Grid>
        </Zone>

        <Center>
          <Down label="single pane of glass" color={N.hi} />
        </Center>
        <Center>
          <Node
            icon="📈"
            title="Unified Security Dashboard"
            sub="Centralized Visibility · Risk Scoring · Compliance · Alerts · Reporting"
            s={NS.gov}
            style={{ maxWidth: 520 }}
          />
        </Center>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// MAIN APP
// ════════════════════════════════════════════════════════════════════════════
const TABS = [
  { label: '🏗️ System Architecture', theme: 'teal' },
  { label: '🌐 Network Diagram', theme: 'teal' },
  { label: '📊 Data Flow (DFD)', theme: 'teal' },
  { label: '⚙️ Process Flow', theme: 'navy' },
  { label: '🔐 Security Architecture', theme: 'navy' },
  { label: '☁️ Cloud / Hybrid', theme: 'navy' },
];

export default function App() {
  const [tab, setTab] = useState(0);
  const isTeal = tab < 3;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#060A10',
        fontFamily: 'Inter,sans-serif',
        padding: 20,
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              width: 4,
              height: 44,
              background: 'linear-gradient(180deg,#F5E642,#F0A500,#2A9090)',
              borderRadius: 4,
            }}
          />
          <div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: '#EEF4FF',
                letterSpacing: '0.3px',
              }}
            >
              AWS CSPM Platform
            </div>
            <div
              style={{
                fontSize: 10,
                color: '#6A9090',
                marginTop: 2,
                letterSpacing: '0.8px',
              }}
            >
              ADVANCED CLOUD SECURITY POSTURE MANAGEMENT — 6 DESIGN ARTIFACTS ·
              TOPIC 89
            </div>
          </div>
          <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
            <div
              style={{
                fontSize: 8,
                color: '#3A6A6A',
                fontWeight: 700,
                letterSpacing: '0.5px',
              }}
            >
              STUDENT
            </div>
            <div style={{ fontSize: 10, color: '#7ABABA', fontWeight: 600 }}>
              Fatima Mahdaim
            </div>
            <div style={{ fontSize: 8, color: '#3A5A7A' }}>
              EduQual Level 6 · Diploma in AI Operations
            </div>
          </div>
        </div>
        <div
          style={{
            height: 1,
            background:
              'linear-gradient(90deg,#F5E642,#F0A500,#2A9090,transparent)',
          }}
        />
      </div>

      {/* Tabs */}
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            display: 'flex',
            gap: 5,
            marginBottom: 6,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 8,
              color: T.textDim,
              fontWeight: 700,
              letterSpacing: '1px',
              marginRight: 4,
            }}
          >
            TEAL SET ▸
          </span>
          {TABS.filter((t) => t.theme === 'teal').map((t, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              style={{
                padding: '6px 13px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 9.5,
                cursor: 'pointer',
                transition: 'all 0.15s',
                border: `1.5px solid ${tab === i ? T.hi : T.border}`,
                background: tab === i ? '#1C3600' : T.card,
                color: tab === i ? T.hi : T.textSub,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            gap: 5,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 8,
              color: N.textDim,
              fontWeight: 700,
              letterSpacing: '1px',
              marginRight: 4,
            }}
          >
            NAVY SET ▸
          </span>
          {TABS.filter((t) => t.theme === 'navy').map((t, i) => (
            <button
              key={i + 3}
              onClick={() => setTab(i + 3)}
              style={{
                padding: '6px 13px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 9.5,
                cursor: 'pointer',
                transition: 'all 0.15s',
                border: `1.5px solid ${tab === i + 3 ? N.hi : N.border}`,
                background: tab === i + 3 ? '#1C1000' : N.card,
                color: tab === i + 3 ? N.hi : N.textSub,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Diagram */}
      <div
        style={{
          background: isTeal ? T.surface : N.surface,
          borderRadius: 12,
          padding: 20,
          border: `1px solid ${isTeal ? T.border : N.border}`,
          overflowX: 'auto',
        }}
      >
        {tab === 0 && <SystemArch />}
        {tab === 1 && <NetworkDiag />}
        {tab === 2 && <DFDiag />}
        {tab === 3 && <ProcessFlow />}
        {tab === 4 && <SecurityArch />}
        {tab === 5 && <CloudHybrid />}
      </div>

      {/* Legend */}
      <div
        style={{
          marginTop: 12,
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontSize: 8.5,
            color: '#3A5A5A',
            fontWeight: 700,
            letterSpacing: '0.8px',
          }}
        >
          LEGEND
        </span>
        {(isTeal
          ? [
              { c: T.a, b: T.borderLight, l: 'Ingestion / External' },
              { c: T.b, b: T.accent, l: 'Processing Engine' },
              { c: T.c, b: T.hiDeep, l: 'Intelligence / Store' },
              { c: T.d, b: T.hi, l: 'Output Layer' },
            ]
          : [
              { c: N.b, b: N.borderLight, l: 'Core Process' },
              { c: '#101E40', b: N.hi, l: 'Governance / Output' },
              { c: N.c, b: N.hiDeep, l: 'Data / Audit' },
              { c: N.a, b: N.border, l: 'External / Identity' },
            ]
        ).map((x, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              background: '#0C1020',
              borderRadius: 5,
              padding: '4px 10px',
              border: `1px solid ${x.b}`,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                background: x.c,
                border: `1.5px solid ${x.b}`,
              }}
            />
            <span style={{ fontSize: 8.5, color: '#7A9ACC', fontWeight: 600 }}>
              {x.l}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
