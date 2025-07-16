import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

class GuideTab extends ConsumerWidget {
  const GuideTab({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Guide'),
      ),
      body: const SingleChildScrollView(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Emergency contacts section
            EmergencyContactsSection(),
            SizedBox(height: 24),
            
            // Guide categories section
            GuideCategoriesSection(),
          ],
        ),
      ),
    );
  }
}

class EmergencyContactsSection extends StatelessWidget {
  const EmergencyContactsSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Emergency Contacts',
          style: Theme.of(context).textTheme.headlineSmall?.copyWith(
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 16),
        
        const EmergencyContactCard(
          title: 'Police',
          number: '997',
          icon: Icons.local_police,
          color: Colors.blue,
        ),
        const SizedBox(height: 8),
        
        const EmergencyContactCard(
          title: 'Fire Department',
          number: '998',
          icon: Icons.local_fire_department,
          color: Colors.red,
        ),
        const SizedBox(height: 8),
        
        const EmergencyContactCard(
          title: 'Medical Emergency',
          number: '999',
          icon: Icons.medical_services,
          color: Colors.green,
        ),
        const SizedBox(height: 8),
        
        const EmergencyContactCard(
          title: 'Emergency (All)',
          number: '112',
          icon: Icons.emergency,
          color: Colors.orange,
        ),
      ],
    );
  }
}

class EmergencyContactCard extends StatelessWidget {
  final String title;
  final String number;
  final IconData icon;
  final Color color;

  const EmergencyContactCard({
    super.key,
    required this.title,
    required this.number,
    required this.icon,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        leading: CircleAvatar(
          backgroundColor: color.withOpacity(0.1),
          child: Icon(icon, color: color),
        ),
        title: Text(title),
        subtitle: Text(number),
        trailing: IconButton(
          icon: const Icon(Icons.phone),
          onPressed: () async {
            final uri = Uri(scheme: 'tel', path: number);
            if (await canLaunchUrl(uri)) {
              await launchUrl(uri);
            }
          },
        ),
      ),
    );
  }
}

class GuideCategoriesSection extends StatelessWidget {
  const GuideCategoriesSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Useful Information',
          style: Theme.of(context).textTheme.headlineSmall?.copyWith(
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 16),
        
        const GuideCategoryCard(
          title: 'Document Requirements',
          subtitle: 'Visa, work permits, residence cards',
          icon: Icons.description,
          color: Colors.blue,
          url: 'https://www.gov.pl/web/gov/uzyskaj-karte-pobytu',
        ),
        const SizedBox(height: 8),
        
        const GuideCategoryCard(
          title: 'Healthcare System',
          subtitle: 'How to register with NFZ and find a doctor',
          icon: Icons.local_hospital,
          color: Colors.green,
          url: 'https://www.nfz.gov.pl/',
        ),
        const SizedBox(height: 8),
        
        const GuideCategoryCard(
          title: 'Banking',
          subtitle: 'Opening bank accounts and financial services',
          icon: Icons.account_balance,
          color: Colors.orange,
          url: 'https://www.knf.gov.pl/',
        ),
        const SizedBox(height: 8),
        
        const GuideCategoryCard(
          title: 'Public Transport',
          subtitle: 'Buses, trams, metro, and tickets',
          icon: Icons.directions_bus,
          color: Colors.purple,
          url: 'https://www.ztm.waw.pl/',
        ),
        const SizedBox(height: 8),
        
        const GuideCategoryCard(
          title: 'Tax Information',
          subtitle: 'PIT, VAT, and tax obligations',
          icon: Icons.receipt,
          color: Colors.red,
          url: 'https://www.podatki.gov.pl/',
        ),
      ],
    );
  }
}

class GuideCategoryCard extends StatelessWidget {
  final String title;
  final String subtitle;
  final IconData icon;
  final Color color;
  final String url;

  const GuideCategoryCard({
    super.key,
    required this.title,
    required this.subtitle,
    required this.icon,
    required this.color,
    required this.url,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        leading: CircleAvatar(
          backgroundColor: color.withOpacity(0.1),
          child: Icon(icon, color: color),
        ),
        title: Text(title),
        subtitle: Text(subtitle),
        trailing: const Icon(Icons.arrow_forward_ios),
        onTap: () async {
          final uri = Uri.parse(url);
          if (await canLaunchUrl(uri)) {
            await launchUrl(uri, mode: LaunchMode.externalApplication);
          }
        },
      ),
    );
  }
}